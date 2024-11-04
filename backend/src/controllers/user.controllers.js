import { z } from "zod";
import UserModel from "../models/user.js";

// Define your Zod schema for the main user
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  year: z.number().int().min(1).max(4),
  library_id: z.string(),
  mobile_number: z.string(),
  gender: z.enum(['Male', 'Female', 'Other']),
  team_name: z.string(),
  team: z.array(z.object({
    name: z.string(),
    email: z.string().email(),
    year: z.number().int().min(1).max(4),
    library_id: z.string(),
    mobile_number: z.string(),
    gender: z.enum(['Male', 'Female', 'Other']),
  })),
});

// Function to check for duplicate values within the team array
const hasInternalDuplicates = (team, field) => {
  const values = team.map(member => member[field]);
  return new Set(values).size !== values.length;
};

// Controller function to register a team
const registerTeam = async (req, res) => {
  try {
    // Validate request body with Zod
    const validatedData = userSchema.parse(req.body);

    // Check for internal duplicates within the new team members
    const fieldsToCheck = ['mobile_number', 'email', 'library_id'];
    for (const field of fieldsToCheck) {
      if (hasInternalDuplicates(validatedData.team, field)) {
        return res.status(400).json({ error: `Duplicate ${field} found within team members` });
      }
    }

    // Collect all mobile numbers, emails, and library IDs from the new team for database conflict check
    const newTeamContacts = validatedData.team.flatMap((member) => [
      { field: 'mobile_number', value: member.mobile_number },
      { field: 'email', value: member.email },
      { field: 'library_id', value: member.library_id },
    ]);

    // Query the database to check if any of these contacts already exist
    const conflicts = [];
    for (const contact of newTeamContacts) {
      const filter = {};
      filter[`team.${contact.field}`] = contact.value;

      const existingUser = await UserModel.findOne(filter);
      if (existingUser) {
        conflicts.push({ field: contact.field, value: contact.value });
      }
    }

  
    if(await UserModel.findOne({email: validatedData.email})){
      return res.status(400).json({error: "Email already exists"});
    }

    if(await UserModel.findOne({mobile_number: validatedData.mobile_number})){
      return res.status(400).json({error: "Mobile number already exists"});
    }

    if(await UserModel.findOne({library_id: validatedData.library_id})){
      return res.status(400).json({error: "Library ID already exists"});
    }

    if(await UserModel.findOne({team: {$elemMatch: {email: validatedData.email}}})){
      return res.status(400).json({error: "Email already exists in a team"});
    }

    if(await UserModel.findOne({team: {$elemMatch: {mobile_number: validatedData.mobile_number}}})){
      return res.status(400).json({error: "Mobile number already exists in a team"});
    }

    if(await UserModel.findOne({team: {$elemMatch: {library_id: validatedData.library_id}}})){
      return res.status(400).json({error: "Library ID already exists in a team"});
    }



    // If any conflicts were found, return an error
    if (conflicts.length > 0) {
      return res.status(400).json({
        error: "Conflict found with existing team members",
        conflicts,
      });
    }

    // If no conflicts, proceed to create a new user document
    const newUser = await UserModel.create(validatedData);

    res.status(201).json({ message: "Team registered successfully", data: newUser });
  } catch (error) {
    res.status(400).json({ error: error instanceof z.ZodError ? error.errors : error.message });
  }
};

export { registerTeam };

'use client'

import { Plus, X, Copy, Upload } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "./components/Header"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TeamMember {
  id: number
  name: string
  year: string
  libraryId: string
  email: string
  contact: string
  gender: string
}

interface Team {
  id: number
  name: string
  members: TeamMember[]
}

export default function Component() {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: '',
      members: [
        {
          id: 1,
          name: '',
          year: '',
          libraryId: '',
          email: '',
          contact: '',
          gender: ''
        }
      ]
    }
  ])

 

  const addTeamMember = (teamId: number) => {
    setTeams(teams.map(team => 
      team.id === teamId
        ? {
            ...team,
            members: [
              ...team.members,
              {
                id: team.members.length + 1,
                name: '',
                year: '',
                libraryId: '',
                email: '',
                contact: '',
                gender: ''
              }
            ]
          }
        : team
    ))
  }

  const removeTeamMember = (teamId: number, memberId: number) => {
    setTeams(teams.map(team => 
      team.id === teamId
        ? {
            ...team,
            members: team.members.length > 1
              ? team.members.filter(member => member.id !== memberId)
              : team.members
          }
        : team
    ))
  }

  const handleTeamNameChange = (teamId: number, value: string) => {
    setTeams(teams.map(team => 
      team.id === teamId ? { ...team, name: value } : team
    ))
  }

  const handleMemberChange = (teamId: number, memberId: number, field: keyof TeamMember, value: string) => {
    setTeams(teams.map(team => 
      team.id === teamId
        ? {
            ...team,
            members: team.members.map(member => 
              member.id === memberId ? { ...member, [field]: value } : member
            )
          }
        : team
    ))
  }


  const [isOpen, setIsOpen] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [screenshot, setScreenshot] = useState<File | null>(null)

  const upiId = 'example@upi'

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId)
      .then(() => alert('UPI ID copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setScreenshot(event.target.files[0])
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the data to your server
    console.log('Transaction ID:', transactionId)
    console.log('Screenshot:', screenshot)
    setIsOpen(false)
    // Reset form
    setTransactionId('')
    setScreenshot(null)
  }


  return (
    <div className="relative bg-[#04000A] overflow-hidden">
    {/* Grid Background */}
    <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none z-0"></div>

    {/* Content */}
    <div className="relative z-10">
      <Header />
    <div className="flex pt-16 hode items-center">
      <div className="w-[40%] p-8 md:flex  hidden items-center justify-center h-screen">
        <img className="w-[100%] flex items-center justify-center" src="logo.png" alt="" />
      </div>
      <div className="md:w-[60%] w-full md:p-8 p-6 pt-10 md:pt-8 flex items-center justify-center">
      <Card className="w-full  mx-auto bg-gray-950 text-gray-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Team Registration Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {teams.map((team) => (
          <div key={team.id} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id={`teamName-${team.id}`}
                value={team.name}
                onChange={(e) => handleTeamNameChange(team.id, e.target.value)}
                className="block z-8 px-4 py-3 w-full text-gray-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                placeholder="Team Name"
              />
              <label
                htmlFor={`teamName-${team.id}`}
                className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
              >
                Team Name
              </label>
            </div>
          
            {team.members.map((member, index) => (
              <div key={member.id} className="space-y-4 relative">
                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeTeamMember(team.id, member.id)}
                    className="text-gray-400 hover:text-gray-100"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-bold">Team Member {index+1}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      id={`name-${team.id}-${member.id}`}
                      value={member.name}
                      onChange={(e) => handleMemberChange(team.id, member.id, 'name', e.target.value)}
                      className="block px-4 py-3 w-full text-gray-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                      placeholder="Name"
                    />
                    <label
                      htmlFor={`name-${team.id}-${member.id}`}
                      className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id={`year-${team.id}-${member.id}`}
                      value={member.year}
                      onChange={(e) => handleMemberChange(team.id, member.id, 'year', e.target.value)}
                      className="block px-4 py-3 w-full text-gray-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                      placeholder="Year"
                    />
                    <label
                      htmlFor={`year-${team.id}-${member.id}`}
                      className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Year
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id={`libraryId-${team.id}-${member.id}`}
                      value={member.libraryId}
                      onChange={(e) => handleMemberChange(team.id, member.id, 'libraryId', e.target.value)}
                      className="block px-4 py-3 w-full text-gray-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                      placeholder="Library ID"
                    />
                    <label
                      htmlFor={`libraryId-${team.id}-${member.id}`}
                      className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Library ID
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id={`email-${team.id}-${member.id}`}
                      value={member.email}
                      onChange={(e) => handleMemberChange(team.id, member.id, 'email', e.target.value)}
                      className="block px-4 py-3 w-full text-gray-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                      placeholder="Email"
                    />
                    <label
                      htmlFor={`email-${team.id}-${member.id}`}
                      className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      id={`gender-${team.id}-${member.id}`}
                      value={member.gender}
                      onChange={(e) => handleMemberChange(team.id, member.id, 'gender', e.target.value)}
                      className="block px-4 py-3 w-full text-gray-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
>
                      <option value="" disabled hidden>
                      Select Gender
                    </option>
                    <option className="" value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      id={`contact-${team.id}-${member.id}`}
                      value={member.contact}
                      onChange={(e) => handleMemberChange(team.id, member.id, 'contact', e.target.value)}
                      className="block px-4 py-3 w-full text-gray-100 bg-gray-900 border-2 border-gray-800 rounded-lg focus:border-primary peer placeholder-transparent"
                      placeholder="Contact Number"
                    />
                    <label
                      htmlFor={`contact-${team.id}-${member.id}`}
                      className="absolute left-2 -top-2.5 bg-gray-950 px-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Contact Number
                    </label>
                  </div>
                </div>
              </div>
            ))}

            <Button
              onClick={() => addTeamMember(team.id)}
              variant="outline"
              className="w-full border-dashed border-2 border-gray-700 hover:border-primary hover:bg-gray-900"
            >
              <Plus className="mr-2 h-4 w-4 " />
              Add Team Member
            </Button>
          </div>
        ))}

      
 <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full py-6 bg-white hover:scale-105 transition-all ease-linear text-base hover:bg-white  text-black">Next</Button>
        </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-64 w-64 bg-gray-200 flex items-center justify-center">
              {/* Replace with actual QR code */}
              <span className="text-gray-500">QR Code</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">{upiId}</span>
              <Button size="icon" variant="ghost" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy UPI ID</span>
              </Button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="transactionId">Transaction ID</label>
              <input
                id="transactionId"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="Enter transaction ID"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="screenshot">Upload Payment Screenshot</label>
              <div className="flex items-center space-x-2">
                <input
                  id="screenshot"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('screenshot')?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {screenshot ? 'Change File' : 'Choose File'}
                </Button>
                {screenshot && <span className="text-sm text-gray-500">{screenshot.name}</span>}
              </div>
            </div>
            <Button type="submit" className="w-full">Complete Registration</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
      </CardContent>
    </Card>
      </div>
      </div>
      </div>
      </div>

    
  )
}
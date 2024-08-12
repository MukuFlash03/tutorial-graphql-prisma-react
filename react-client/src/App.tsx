import { User } from "./lib/types"
import UserDisplay from './components/UserDisplay'

function App() {
  const users: User[] = [{
    name: 'Prisma Fan',
    messages: [
      {
        body: 'Prisma rocks!!'
      }, {
        body: 'Did I mention I love Prisma?'
      }, {
        body: 'Did I mention I love Prisma?'
      }
    ]
  }]

  return (
    <>
      <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
        {users.map((user, index) => (
          <UserDisplay key={index} user={user} />
        ))}
      </div>
    </>
  )
}

export default App
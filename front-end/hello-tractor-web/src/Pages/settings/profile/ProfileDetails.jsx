import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

const ProfileDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="">
          <h2>My Listing(s)</h2>
          <Button>+ Add New Listing</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
import ManagerHeader from "../../component/Header_Manager"
import Swal from "sweetalert2"
export default function Manager() {
    return(
        <div className="mt-10">
        <ManagerHeader/>
        <div className="flex flex-cols items-center justify-center w-full text-black font-bold mt-52">
            <div className="">
            <div className="mb-5">
                STAFF INFORMATION
            </div>

            <div   className="grid grid-cols-2 mb-5 "
            style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div >
                    STAFF_ID
                </div>

                <div >
                    <input type="text" className="bg-black text-white rounded-lg px-2"/>
                </div>
            </div>

            <div   className="grid grid-cols-2 mb-5 w-full"
            style={{ gridTemplateColumns: "1fr 1fr"  }}>
                <div>
                    STAFF_EMAIL
                </div>

                <div className="w-full">
                    <input type="text"className="bg-black text-white rounded-lg px-2" />
                </div>

                
            </div>

            <div   className="grid grid-cols-2 mb-5 w-full rounded-lg"
            style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div>
                    STAFF_NAME
                </div>

                <div>
                    <input type="text" className="bg-black text-white rounded-lg px-2" />
                </div>
            </div>

            <div   className="grid grid-cols-2 mb-5 w-full"
            style={{ gridTemplateColumns: "1fr 1fr"  }}>
                <div>
                    STAFF_PASSWORD
                </div>

                <div className="w-full">
                    <input type="text"className="bg-black text-white rounded-lg px-2" />
                </div>

                
            </div>

            

            <div 
            className="grid grid-cols-2 mb-5 w-full"
            style={{ gridTemplateColumns: "1fr 1fr"  }}>
                <div>
                    STAFF_IMG
                </div>

                <div>
                    <input type="text" className="bg-black text-white rounded-lg px-2"/>
                </div>
            </div>
<div className="flex justify-center">

<button
          className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg w-full "
          onClick={()=>{
                Swal.fire({
                  position: "top-mid",
                  icon: "success",
                  title: "Create Staff",
                  showConfirmButton: false,
                  timer: 1500,
                });
          }}
        >
          Confirm
        </button>
</div>
            </div>
           
        </div>
        </div>
    )
}
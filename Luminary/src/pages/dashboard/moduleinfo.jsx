import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button
  
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream:Luminary/src/pages/dashboard/moduleinfo.jsx
export function Moduleinfo() {
=======
import { useState, useEffect } from "react";
import { db } from "@/firebase";
import { collection, doc, getDocs} from "firebase/firestore";

export function Schedule() {

const [moduleDetail, setDetail] = useState([])
const detailCollectionRef = collection(db, "moduleDetail")

useEffect(() => {
  

  const getDetail = async ()=>{
    const data = await getDocs(detailCollectionRef);
    setDetail(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  }
  getDetail()  
}, [])

>>>>>>> Stashed changes:Luminary/src/pages/dashboard/Schedule.jsx
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Module Info
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Module", "Type", "Time", "Venue", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {moduleDetail.map((detail, key) => {
                   const className = `py-3 px-5 ${
                    key === detailCollectionRef.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {detail.module}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {detail.type}
                            </Typography>
              
                      </td>
                      <td className={className}>
                        <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {detail.time}
                            </Typography>
                      </td>
                      <td className={className}>
                      <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {detail.venue}
                            </Typography>
                      </td>
                      <Link to = "/dashboard/Tables" >
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-s font-semibold text-blue-gray-600"
                        >
                          <Tooltip content="Material Tailwind">
                          <Button variant="gradient">Add To Timetable</Button>
                        </Tooltip>
                        </Typography>
                      </td>
                      </Link>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Moduleinfo;

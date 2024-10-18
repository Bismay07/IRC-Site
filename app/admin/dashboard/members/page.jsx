import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 
const data = [
  {
    regdNo: "2155372977",
    name: "Rosa Diaz",
    role: "Admin",
    year: "2024",
  },
  {
    regdNo: "2114843429",
    name: "Leroy Pearson",
    role: "Member",
    year: "2024",
  },
  {
    regdNo: "2150786453",
    name: "Jennie George",
    role: "Member",
    year: "2024",
  },
  {
    regdNo: "2140744071",
    name: "Oscar Gill",
    role: "Member",
    year: "2024",
  },
  {
    regdNo: "2108200596",
    name: "Alan Gomez",
    role: "member",
    year: "2024",
  },
  {
    regdNo: "2120392023",
    name: "Chad Ford",
    role: "Admin",
    year: "2024",
  },
  {
    regdNo: "2136129674",
    name: "Edith Delgado",
    role: "Admin",
    year: "2024",
  },
]
const page = () => {
  return (
    <Table className={`mt-20`}>
      <TableCaption>List of members.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Regd No.</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Year</TableHead>
          <TableHead className="text-right">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.regdNo}>
            <TableCell className="font-medium">{item.regdNo}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.year}</TableCell>
            <TableCell className="text-right">{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default page

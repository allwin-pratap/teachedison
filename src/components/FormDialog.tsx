'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useUserStore } from "@/store/userStore";
import { useState } from "react"

type FormDialogProps = {
  type: string // Required prop
  id?: string  // Optional prop
}

export default function FormDialog({ type, id }: FormDialogProps) {
  const { addUser, updateUser, deleteUser, users } = useUserStore();
  const existingUser = users.find((user) => user.id === id);

  const [formData, setFormData] = useState({
    name: existingUser?.name || "",
    email: existingUser?.email || "",
    role: existingUser?.role || "Student",
  });


  const [isOpen, setIsOpen] = useState(false);

  const handleSave = () => {
    if (type === "add") {
      addUser({ id: Date.now().toString(), ...formData });
    } else if (type === "edit" && id) {
      updateUser(id, formData);
    } else if (type === "delete" && id) {
      deleteUser(id)
    }
    setIsOpen(false);
  };

  const getLabel = (type: string) => {
    return type == 'add'
      ? 'Add'
      : type === 'edit'
        ? 'Update'
        : type === 'delete'
          ? 'Delete'
          : 'Submit';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {type == 'add' ? (
          <Button variant="outline">Add User</Button>
        ) : (
          <div className="capitalize text-sm font-medium pl-[10px] py-[5px] cursor-pointer">{type}</div>
        )}
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-900 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="capitalize">
            {getLabel(type)} User
          </DialogTitle>
        </DialogHeader>
        {type == 'delete' ? (
          <div className="grid gap-4 py-4">
            Are you sure to Delete: {formData.email}
          </div>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Role
              </Label>
              <Select value={formData.role}>
                <SelectTrigger className="w-full col-span-3">
                  <SelectValue placeholder="Select a Role" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-900">
                  <SelectGroup>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Instructor">Instructor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button onClick={handleSave}>
            {getLabel(type)}
          </Button>

          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

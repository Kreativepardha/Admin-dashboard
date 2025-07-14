import { useState } from 'react';
import { toast } from 'sonner';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import { Button } from '@/components/ui/stateful-button';
import { StickyBanner } from '@/components/ui/sticky-banner';
import { Boxes } from '@/components/ui/background-boxes';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Dashboard() {
  const [data, setData] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const openAddModal = () => {
    setEditingUser(null);
    setName('');
    setEmail('');
    setShowModal(true);
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setShowModal(true);
  };

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (editingUser) {
      setData(data.map(user => user.id === editingUser.id ? { ...user, name, email } : user));
      toast.success("User updated");
    } else {
      const newUser = { id: Date.now(), name, email };
      setData([...data, newUser]);
      toast.success("User added");
    }

    setShowModal(false);
    setName('');
    setEmail('');
    setEditingUser(null);
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
    toast.success('User deleted');
  };

  return (
    <div className="absolute p-4 max-w-4xl mx-auto relative">
<div className="z-0 inset-0">
  <Boxes />
</div>
      <div className="sticky top-0 z-50">
        <StickyBanner className="bg-gradient-to-b from-teal-200 to-teal-100 shadow-md text-black">
          <p className="mx-0 max-w-[90%]  drop-shadow-md">
            I'm a Full Stack Developer — building CyberSecurity Applications with integrated AI.
          </p>
        </StickyBanner>
      </div>

      <div className="z-10 text-center text-white py-16 text-2xl font-bold tracking-tight md:text-4xl">
        <PointerHighlight>
          <span className="dark:text-white p-2">By Kreative_Pardha</span>
        </PointerHighlight>
      </div>
<div className="bg-white p-2 rounded-md relative z-10">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      <Button className="mb-4" onClick={openAddModal}>Add User</Button>

      <table className="w-full p-2 border border-gray-200 text-left text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-zinc-800">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-t dark:border-zinc-700">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 space-x-2">
                <button onClick={() => openEditModal(user)} className="text-blue-500 hover:underline">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <h2 className="text-lg font-bold mb-4">{editingUser ? 'Edit User' : 'Add User'}</h2>
            <div className="space-y-4">
              <input
                className="w-full px-3 py-2 border rounded dark:bg-zinc-800 dark:text-white"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border rounded dark:bg-zinc-800 dark:text-white"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex justify-end gap-2 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded hover:bg-gray-300 dark:hover:bg-zinc-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

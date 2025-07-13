import { useState } from 'react';
import { toast } from 'sonner';

export default function FormPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      toast.error('All fields required');
      return;
    }

    toast.success('Form submitted');
    // to Backend
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">New Entry</h1>
      <input className="input mb-2" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input className="input mb-2" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <button className="bg-black text-white px-4 py-2 rounded w-full" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

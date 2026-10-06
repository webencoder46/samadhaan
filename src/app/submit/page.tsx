"use client";

import { useState, FormEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Icon from "../../components/Icon";
import { Button, Badge, Title } from "../../components/ui";
import { supabase } from "../../lib/supabase"; // Import our new database connection

// Helper component for the form fields
function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="field">
      <span className="field-label">{label}{hint && <em>{hint}</em>}</span>
      {children}
    </label>
  );
}

export default function SubmitPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // This state holds all the form inputs
  const [formData, setFormData] = useState({
    category: "",
    problem_description: "",
    seriousness: "Normal",
    support_type: "Advice chahiye",
    contact_detail: ""
  });

  // Handle changes for inputs, selects, and textareas
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // 1. Send the data to the support_requests table in Supabase
    const { error } = await supabase
      .from('support_requests')
      .insert([
        {
          category: formData.category,
          problem_description: formData.problem_description,
          seriousness: formData.seriousness,
          support_type: formData.support_type,
          contact_detail: formData.contact_detail
        }
      ]);

    if (error) {
      console.error("Error submitting problem:", error);
      alert("Oops! Something went wrong. Please try again.");
      setIsSubmitting(false);
      return;
    }

    // 2. If successful, redirect to your success page!
    router.push("/success");
  };

  return (
    <section className="form-page section">
      <div className="form-head">
        <Badge tone="accent">CONFIDENTIAL + SUPPORT REQUEST</Badge>
        <Title as="h1">Apni Samasya<br />Batayein.</Title>
        <p>Jitna comfortable ho utna hi share karein. Simple words best hain.</p>
        <div className="privacy-card">
          <Icon name="lock" size={22} />
          <p><b>Privacy pehle.</b> Please kisi aur student ka full name, photo, phone number ya unnecessary personal information share na karein.</p>
        </div>
      </div>

      <form className="support-form" onSubmit={handleSubmit}>
        <div className="form-progress">
          <span>SAMADHAAN SUPPORT FORM</span>
          <Badge tone="success"><span className="status-dot"></span>Secure-ish</Badge>
        </div>

        <Field label="1. Problem Category">
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            required
          >
            <option value="" disabled>Category select karein</option>
            <option>Samadhaan Related</option>
            <option>Hostel Life</option>
            <option>Friendship</option>
            <option>Study</option>
            <option>General School Problem</option>
            <option>Other</option>
          </select>
        </Field>

        <Field label="2. Aapki problem kya hai?">
          <textarea 
            name="problem_description" 
            value={formData.problem_description} 
            onChange={handleChange} 
            required 
            rows={6} 
            placeholder="Yahan apni situation simple words mein batao..." 
          />
        </Field>

        <fieldset>
          <legend>3. Situation kitni serious hai?</legend>
          <div className="choice-grid seriousness">
            {["Normal", "Thodi Serious", "Serious", "Bhai Kuch Karo"].map(x => (
              <label key={x} className={formData.seriousness === x ? "selected" : ""}>
                <input 
                  type="radio" 
                  name="seriousness" 
                  value={x}
                  checked={formData.seriousness === x} 
                  onChange={handleChange} 
                />
                <span className="radio-dot"></span>{x}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>4. Aap kis type ka support chahte hain?</legend>
          <div className="choice-list">
            {["Bas koi sun le", "Advice chahiye", "Situation handle karne mein help", "Trusted adult tak baat pahunchani hai"].map(x => (
              <label key={x} className={formData.support_type === x ? "selected" : ""}>
                <input 
                  type="radio" 
                  name="support_type" 
                  value={x}
                  required 
                  checked={formData.support_type === x} 
                  onChange={handleChange} 
                />
                <span className="radio-dot"></span>{x}
              </label>
            ))}
          </div>
        </fieldset>

        <Field label="5. Contact karna ho to contact detail" hint="OPTIONAL">
          <input 
            type="text" 
            name="contact_detail" 
            value={formData.contact_detail} 
            onChange={handleChange} 
            placeholder="Email ya safe contact detail" 
          />
        </Field>

        <label className="checkbox-row">
          <input type="checkbox" required />
          <span className="custom-checkbox"><Icon name="check" size={14} /></span>
          <span>I understand ki SAMADHAAN ek student-support project hai aur emergency service nahi hai.</span>
        </label>

        <Button type="submit" icon="arrow" full disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Form Submit Karo"}
        </Button>
        <p className="form-foot"><Icon name="check" size={16} /> Form submit karne ke baad ek confirmation screen milegi.</p>
      </form>
    </section>
  );
}
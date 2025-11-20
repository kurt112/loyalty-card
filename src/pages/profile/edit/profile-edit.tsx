import React, {useContext, useState} from "react";
import {AppStateContext} from "../../../context/AppStateContext";
import {Link} from "react-router-dom";

const FancyForm = () => {

    const data = useContext(AppStateContext);

    const [form, setForm] = useState({
        ...data.appData.user
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        data.updateData({
            ...data.appData,
            user: {
                ...form
            }
        });

        alert("Profile updated successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-200">
            <form
                onSubmit={handleSubmit}
                className="bg-white/90 rounded-2xl p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
                    Update Profile Information
                </h2>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        required
                        placeholder="Enter your first name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        required
                        placeholder="Enter your last name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition"
                >
                    Submit
                </button>
                <Link to={'/profile'} >
                    <button
                        className="w-full mt-7 text-black"
                    >
                        Back
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default FancyForm;
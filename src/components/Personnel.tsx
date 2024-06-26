"use client";
import { useSession } from "next-auth/react";

export default function Personnel(): JSX.Element {
  const { status }: any = useSession();

  return status === "authenticated" ? (
    <main>
      <div className="flex flex-col md:flex-row gap-3 m-5">
        <input className="input input-primary w-full md:w-fit md:flex-1" type="search" />
        <button className="btn btn-square w-full md:w-fit md:flex-1">Create</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra table-auto">
          {/* head */}
          <thead className="bg-primary text-white text-center">
            <tr>
              <th>Action</th>
              <th>Generation</th>
              <th>Category</th>
              <th>{`Prefix (TH)`}</th>
              <th>{`Prefix (EN)`}</th>
              <th>{`First Name (TH)`}</th>
              <th>{`First Name (EN)`}</th>
              <th>{`Middle Name (TH)`}</th>
              <th>{`Middle Name (EN)`}</th>
              <th>{`Last Name (TH)`}</th>
              <th>{`Last Name (EN)`}</th>
              <th>{`Position Name (TH)`}</th>
              <th>{`Position Name (EN)`}</th>
              <th>Profile Image</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </main>
  ) : (
    <main className="flex space-x-2 justify-center items-center bg-base-100 h-screen">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce"></div>
    </main>
  );
}

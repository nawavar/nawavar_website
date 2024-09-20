"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { MdWeb } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { GrAnnounce } from "react-icons/gr";
import { FaRegCreditCard } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  const SearchItems = [
    { ID: 1, Name: "Web Development", Link: "/web-dev", Icon: MdWeb }, // Store the component itself
    { ID: 2, Name: "Shop", Link: "/shop", Icon: CiShop },
    { ID: 3, Name: "Advertise", Link: "/ad", Icon: GrAnnounce },
    { ID: 4, Name: "N Pay", Link: "/npay", Icon: FaRegCreditCard },
  ];

  const filteredItems = searchTerm
    ? SearchItems.filter((item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : SearchItems; // If search term is empty, show all items

  return (
    <section
      className="w-full min-h-screen py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center relative"
      style={{
        backgroundColor: "#1e1e25",
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%274%27 height=%274%27 viewBox=%270 0 4 4%27%3E%3Cpath fill=%27%23ffffff%27 fill-opacity=%270.4%27 d=%27M1 3h1v1H1V3zm2-2h1v1H3V1z%27%3E%3C/path%3E%3C/svg%3E')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-6">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-white tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Discover What You are Looking For
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-100 md:text-2xl">
              Your journey starts with a simple search. Let us help you find
              what you need today.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-lg space-y-4 relative">
            <form className="flex space-x-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-[6px] h-6 w-6 text-[#1E1E25]" />
                <Input
                  className="pl-12 pr-4 py-3 bg-white/90 text-gray-800 rounded-full shadow-lg focus:ring-2 focus:ring-blue-400"
                  placeholder="What are you searching for?"
                  type="search"
                  onFocus={() => setIsFocused(true)} // Set focus state
                  onBlur={() => setTimeout(() => setIsFocused(false), 100)} // Delay closing to allow link click
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
              </div>
            </form>

            {/* Dynamic Search Results */}
            {isFocused && (
              <ul className="absolute top-14 left-0 w-full bg-white rounded-lg shadow-lg z-20">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <li
                      key={item.ID}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    >
                      <Link
                        href={item.Link}
                        className="flex items-center space-x-3"
                      >
                        <item.Icon className="h-6 w-6 text-gray-800" />{" "}
                        {/* Render the icon */}
                        <span>{item.Name}</span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="py-2 px-4 text-gray-500">No results found</li>
                )}
              </ul>
            )}
          </div>

          <Button className="px-6 py-3 rounded-full bg-gradient-to-b from-[#249bf0] to-[#21d0e0] text-white font-semibold hover:bg-blue-700 transition-all shadow-lg">
            Search
          </Button>

          {/* Popular Links */}
          <p className="text-sm text-gray-300">
            Popular:{" "}
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Shop
            </a>
            ,{" "}
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Ad
            </a>
            ,{" "}
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

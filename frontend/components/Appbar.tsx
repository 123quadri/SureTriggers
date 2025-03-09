"use client";
import { useRouter } from "next/navigation"
import { LinkButton } from "./buttons/LinkButton"
import { PrimaryButton } from "./buttons/PrimaryButton";
import { useState, useEffect } from "react";

export const Appbar = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check login status when component mounts
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    // Logout handler
    const handleLogout = () => {
        // Remove token from local storage
        localStorage.removeItem("token");
        // Update login state
        setIsLoggedIn(false);
        // Redirect to home page
        router.push("/");
    };

    return (
        <div className="flex border-b justify-between p-4">
            <div className="flex flex-col justify-center text-2xl font-extrabold">
                Zapier
            </div>
            <div className="flex items-center">
                <div className="pr-4">
                    <LinkButton onClick={() => {}}>Contact Sales</LinkButton>
                </div>
                
                {!isLoggedIn ? (
                    <>
                        <div className="pr-4">
                            <LinkButton onClick={() => router.push("/login")}>
                                Login
                            </LinkButton>
                        </div>
                        <PrimaryButton onClick={() => router.push("/signup")}>
                            Signup
                        </PrimaryButton>
                    </>
                ) : (
                    <>
                        <div className="pr-4">
                            <LinkButton onClick={() => router.push("/dashboard")}>
                                Dashboard
                            </LinkButton>
                        </div>
                        <PrimaryButton onClick={handleLogout}>
                            Logout
                        </PrimaryButton>
                    </>
                )}
            </div>
        </div>
    )
}
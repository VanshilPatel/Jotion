"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {useConvexAuth} from "convex/react"
import { Spinner } from "@/components/ui/spinner";
import {SignInButton} from "@clerk/clerk-react"
import Link from "@/node_modules/next/link";




const Heading = () => {
  
  const {isAuthenticated, isLoading} = useConvexAuth(true)

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & plans. Unified. Welcome to 
         <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is connect workspace where <br/>
        better, faster work happens
      </h3>

      {isLoading && (
        <div className="w-full flex items-center justify-center">
        <Spinner size="lg"/>
        </div>
      )}

     {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
        Enter Jotion
     <ArrowRight className="ml-2 h-4 w-4"/>
         </Link>
      </Button>
     )}

     {!isAuthenticated && !isLoading && (
      <SignInButton mode="modal">
        <Button>
          Get Jotion free
          <ArrowRight className="h-4 w-4 ml-2"/>
        </Button>

      </SignInButton>
     )}
      
    </div>
  )
}

export default Heading;

"use client"

import { Textarea } from "@/components/ui/textarea";
import Nvabar from "../../components/nav";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function OraganizationLandingPage() {
    const [blogContent, setBlogContent] = useState("");
    const [blogTitle, setBlogTitle] = useState("");
    return (
        <main>
            <Nvabar />
            <div className="p-10">
                <Input
                placeholder="Title"
                value={blogTitle} onChange={e => setBlogTitle(e.target.value)} />
                <Textarea
                placeholder="Place your content here"
                className="mt-2"
                value={blogContent}
                onChange={e => setBlogContent(e.target.value)}/>
                <Button className="mt-2">Create Blog</Button>
            </div>

        </main>
    )
}
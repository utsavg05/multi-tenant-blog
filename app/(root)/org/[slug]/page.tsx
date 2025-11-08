"use client"

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { createBlog } from '@/app/(root)/org/[slug]/actions'
import { useOrganization } from "@clerk/nextjs";
import Nvabar from "@/app/components/nav";

export default function OraganizationLandingPage() {
    const [blogContent, setBlogContent] = useState("");
    const [blogTitle, setBlogTitle] = useState("");

    const selectedOrg = useOrganization()
    console.log(selectedOrg)

    const handleCreateBlog = async () => {
        if (!selectedOrg.organization?.id) return
        await createBlog({
            title: blogTitle,
            body: blogContent.trim(),
            orgId: selectedOrg.organization?.id
        })
    }

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
                    onChange={e => setBlogContent(e.target.value)} />
                <Button onClick={handleCreateBlog} className="mt-2">Create Blog</Button>
            </div>

        </main>
    )
}
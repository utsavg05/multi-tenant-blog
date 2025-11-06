"use client"

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'

const Nvabar = () => {
    return (
        <nav className='px-5 py-4 flex items-center justify-between'>
            <div>
                <h1 className='font-semibold'>TenantTales Blog</h1>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
                <UserButton />
            </div>
        </nav>
    )
}

export default Nvabar
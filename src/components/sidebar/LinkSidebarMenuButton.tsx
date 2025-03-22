import * as React from 'react'
import {createLink, LinkComponent} from '@tanstack/react-router'
import {SidebarMenuButton} from "@/components/ui/sidebar.tsx";
import * as react from "react";
import {LucideProps} from "lucide-react";
import {Slot} from "@radix-ui/react-slot";

interface BasicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode
    isActive?: boolean
    icon: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>
    title: string
    // Add any additional props you want to pass to the anchor element
}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
    (props, ref) => {
        return (
            <Slot>
                <SidebarMenuButton asChild isActive={props.isActive}>
                    <a className="group" ref={ref} {...props}></a>
                </SidebarMenuButton>
            </Slot>
        )
    },
)

const CreatedLinkComponent = createLink(BasicLinkComponent)

export const LinkSidebarMenuButton: LinkComponent<typeof BasicLinkComponent> = (props) => {
    return <CreatedLinkComponent preload={'intent'} {...props} />
}
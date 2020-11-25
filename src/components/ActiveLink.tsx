import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";
import { UrlObject } from "url";

interface ActiveLinkProps {
    activeClassName: string;
    href: string | UrlObject;
    as?: string | UrlObject;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
    children,
    activeClassName,
    ...props
}) => {
    const { asPath } = useRouter();
    const child = Children.only(children) as any;
    const childClassName = child.props.className || "";
    console.log("asPath=", asPath);

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

ActiveLink.propTypes = {};

export default ActiveLink;

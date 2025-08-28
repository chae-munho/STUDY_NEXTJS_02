
// "use client"; // usePathname() 클라이언트 컴포넌트이므로 use client를 추가해야 된다 근데 해당 컴포넌트를 nav-link.js 로 옮겨짐
//<NavLink> 컴포넌트로 분리했으므로 해당 페이지에는 use client를 사용할 필요 없다 이젠 기본적으로 use server 상태가 되는거임
import Link from "next/link";
import NavLink from "./nav-link";


export default function MainHeader() {
    
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news">News</NavLink>
                    </li>
                       
                      <li>
                         <NavLink href="/archive">Archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
       
    )
}
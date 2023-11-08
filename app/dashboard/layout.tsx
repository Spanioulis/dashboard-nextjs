import SideNav from '../ui/dashboard/sidenav';
import styles from '../ui/home.module.css';

type Layout = {
    children: React.ReactNode;
};

export default function Layout({ children }: Layout) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className={`flex-grow p-6 md:overflow-y-auto md:p-12 ${styles.crimson}`}>{children}</div>
        </div>
    );
}

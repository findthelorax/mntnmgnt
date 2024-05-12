import React, { ReactNode } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Drawer from '../components/Dashboard/Drawer';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Drawer />
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';  // Import framer-motion for animations

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/Theme-Switch';
import { SearchIcon } from '@/components/Icons';
import Lullipopco from '@/components/LullipopLogo';

export const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // Listen to scroll event

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  // Framer motion variants for navbar animation
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="visible"
      animate={scrollDirection === 'down' ? 'hidden' : 'visible'} // Animate based on scroll direction
      variants={navbarVariants}
      transition={{ duration: 0.5 }} // Smooth transition duration
      className="sticky top-0 z-50 bg-transparent shadow-none"
    >
      <NextUINavbar maxWidth="xl" className="bg-transparent shadow-none">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarMenuToggle className="mr-2" />
        </NavbarContent>

        <NavbarContent className="flex justify-center items-center">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-center items-center"
              href="/"
              style={{ width: '150px' }}
            >
              <Lullipopco style={{ width: '100%', height: 'auto' }} />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
          <ThemeSwitch />
        </NavbarContent>

        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? 'primary'
                      : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </motion.div>
  );
};

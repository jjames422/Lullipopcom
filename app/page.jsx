import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@/components/Primitives';
import { siteConfig } from '@/config/site';
import Footer from '@/components/Footer'; // Import Footer component

export default function Home() {
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/1366_768_Z9P_1118 1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Optional dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Text with Shop Now Button positioned on the left side, like the Burberry layout */}
        <div className="absolute left-8 bottom-[20%] z-20 text-left text-white">
          <h2 className="text-xl font-semibold">Handcrafted for Perfection</h2>
          <p className="text-sm">Limited Edition Lingerie</p>
          <Link
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
              size: 'lg',
            })}
            href={siteConfig.links.docs}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </>
  );
}

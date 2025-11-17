"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Camera, CreditCard, Film, HelpCircle, Instagram, Monitor, Package, PlayCircle, Quote, Rocket, Sparkles, Twitter, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="large"
      background="grid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="FilmCraft"
          button={{
            text: "Start Creating",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="FilmCraft"
          description="Create stunning movies with professional-grade editing tools. From concept to cinema, bring your vision to life."
          buttons={[
            {
              text: "Start Creating",
              href: "contact"
            },
            {
              text: "Watch Demo",
              href: "https://demo.filmcraft.com"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372673924-321xqbyz.jpg"
          imageAlt="Professional video editing interface"
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Professional Movie Making Tools"
          description="Comprehensive suite of video editing tools designed for filmmakers, content creators, and video professionals. Create cinematic masterpieces with ease."
          tag="Why FilmCraft"
          tagIcon={Film}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Professional Timeline",
              description: "Multi-track timeline with frame-accurate editing, keyframe animation, and advanced audio mixing capabilities.",
              icon: PlayCircle
            },
            {
              title: "Cinema-Grade Effects",
              description: "Hollywood-quality visual effects, color correction, and motion graphics to make your films stand out.",
              icon: Sparkles
            },
            {
              title: "4K Export Ready",
              description: "Export in multiple formats including 4K, HDR, and cinema-standard codecs for professional distribution.",
              icon: Monitor
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372674423-ypx4fn3t.jpg"
          imageAlt="Video timeline editing interface"
          imagePosition="right"
          buttons={[
            {
              text: "Explore Features",
              href: "features"
            }
          ]}
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Everything You Need to Create"
          description="Professional tools and features designed for modern filmmaking and video production"
          tag="Features"
          tagIcon={Camera}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Advanced Timeline Editing",
              description: "Multi-track timeline with precision editing tools, magnetic timeline, and unlimited undo/redo functionality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372674423-ypx4fn3t.jpg",
              imageAlt: "Advanced timeline editing interface"
            },
            {
              title: "Visual Effects & Motion Graphics",
              description: "Professional-grade VFX suite with compositing, motion tracking, and 3D text animation capabilities.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372675286-kiezoexi.jpg",
              imageAlt: "Visual effects and motion graphics"
            },
            {
              title: "4K/8K Export & Rendering",
              description: "Export in cinema-quality formats with hardware acceleration and batch rendering for faster workflows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372675959-q62jnavp.jpg",
              imageAlt: "4K video rendering and export"
            },
            {
              title: "Cloud Collaboration",
              description: "Real-time collaboration tools for teams, with cloud storage, version control, and shared project workspaces.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372676674-0yot6wjt.jpg",
              imageAlt: "Team collaboration on video projects"
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Choose Your FilmCraft Edition"
          description="Professional video editing software packages tailored for different needs and budgets"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "filmmaker-pro",
              name: "FilmCraft Pro",
              price: "$299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372674423-ypx4fn3t.jpg",
              imageAlt: "FilmCraft Pro software interface",
              onProductClick: () => console.log('FilmCraft Pro clicked')
            },
            {
              id: "filmmaker-studio",
              name: "FilmCraft Studio",
              price: "$599",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372675286-kiezoexi.jpg",
              imageAlt: "FilmCraft Studio software interface",
              onProductClick: () => console.log('FilmCraft Studio clicked')
            },
            {
              id: "filmmaker-enterprise",
              name: "FilmCraft Enterprise",
              price: "$1,299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372676674-0yot6wjt.jpg",
              imageAlt: "FilmCraft Enterprise software interface",
              onProductClick: () => console.log('FilmCraft Enterprise clicked')
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Plan"
          description="Flexible pricing options for creators, professionals, and studios"
          tag="Pricing"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "$29/mo",
              name: "Starter Plan",
              features: [
                "HD video editing",
                "Basic effects library",
                "Standard export formats",
                "Email support",
                "5GB cloud storage"
              ],
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "features"
                }
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$79/mo",
              name: "Professional Plan",
              features: [
                "4K video editing",
                "Advanced VFX suite",
                "All export formats",
                "Priority support",
                "100GB cloud storage",
                "Collaboration tools"
              ],
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "features"
                }
              ]
            },
            {
              id: "studio",
              price: "$199/mo",
              name: "Studio Plan",
              features: [
                "8K video editing",
                "Cinema-grade color tools",
                "Advanced motion graphics",
                "24/7 phone support",
                "Unlimited cloud storage",
                "Multi-user collaboration",
                "Custom workflows"
              ],
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Enterprise Demo",
                  href: "https://demo.filmcraft.com"
                }
              ]
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Trusted by Creators Worldwide"
          description="See what professional filmmakers and content creators say about FilmCraft"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Film Director",
              company: "Independent Films",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372677177-gmhs0bte.jpg",
              imageAlt: "Sarah Johnson, Film Director"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Senior Video Editor",
              company: "Creative Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372677739-3lrwg308.jpg",
              imageAlt: "Marcus Chen, Video Editor"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Content Producer",
              company: "Media Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372678673-10pc59hj.jpg",
              imageAlt: "Emily Rodriguez, Content Producer"
            },
            {
              id: "4",
              name: "David Kim",
              role: "YouTube Creator",
              company: "Digital Content",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763372679156-8tao47j4.jpg",
              imageAlt: "David Kim, YouTube Creator"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about FilmCraft video editing software"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What video formats does FilmCraft support?",
              content: "FilmCraft supports all major video formats including MP4, MOV, AVI, MKV, and professional codecs like ProRes and DNxHD. You can import and export in 4K, 8K, and HDR formats."
            },
            {
              id: "2",
              title: "Is there a free trial available?",
              content: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial."
            },
            {
              id: "3",
              title: "Can I use FilmCraft for commercial projects?",
              content: "Absolutely! All our plans include commercial licensing. You can use FilmCraft to create content for clients, sell your videos, or use in commercial productions."
            },
            {
              id: "4",
              title: "What are the system requirements?",
              content: "FilmCraft runs on Windows 10/11 and macOS 10.15 or later. Minimum 8GB RAM (16GB recommended), dedicated graphics card, and 4GB free storage space."
            },
            {
              id: "5",
              title: "Do you offer educational discounts?",
              content: "Yes! We offer 50% discounts for students and educators with valid academic credentials. Contact our support team to verify eligibility."
            },
            {
              id: "6",
              title: "Can I collaborate with team members?",
              content: "Professional and Studio plans include collaboration features like shared projects, cloud storage, version control, and real-time editing capabilities."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Create Your Masterpiece?"
          description="Join thousands of creators using FilmCraft to bring their stories to life. Start your free trial today and experience professional video editing."
          inputPlaceholder="Enter your email address"
          buttonText="Start Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. Cancel anytime during your trial."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="FilmCraft"
          copyrightText="© 2025 FilmCraft Studios. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Free Trial",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "https://help.filmcraft.com"
                },
                {
                  label: "Tutorials",
                  href: "https://learn.filmcraft.com"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "https://careers.filmcraft.com"
                },
                {
                  label: "Press",
                  href: "https://press.filmcraft.com"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/filmcraft",
              ariaLabel: "Follow FilmCraft on Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/filmcraft",
              ariaLabel: "Subscribe to FilmCraft on YouTube"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/filmcraft",
              ariaLabel: "Follow FilmCraft on Instagram"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
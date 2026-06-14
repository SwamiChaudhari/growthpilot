import { blogPosts } from "@/data/content";
import { Clock, ArrowLeft, Calendar, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog | GrowthPilot" };
  return {
    title: `${post.title} | GrowthPilot Blog`,
    description: post.excerpt,
  };
}

// Full article content for each blog post
const articleContent: Record<string, { content: string; faqs: { q: string; a: string }[] }> = {
  "why-your-business-needs-website-2025": {
    content: `<p>Let's be honest. When someone hears about your business for the first time, what's the first thing they do? They Google it. They look for your website. And if they can't find one — or if your website looks like it was built in 2010 — they move on to your competitor.</p>

<p>That's the reality in 2025. A professional website isn't a luxury anymore. It's a basic requirement for any business that wants to grow.</p>

<h2>Why Your Website Matters More Than Ever</h2>

<p>Here are some numbers that should make you think:</p>

<ul>
<li><strong>84% of customers</strong> say a business's website is the most important factor in their purchasing decision.</li>
<li><strong>75% of people</strong> judge a business's credibility based on its website design.</li>
<li><strong>Over 60% of all web traffic</strong> now comes from mobile phones.</li>
<li><strong>53% of mobile users</strong> leave a website if it takes more than 3 seconds to load.</li>
</ul>

<p>These aren't just statistics. They represent real customers who are choosing — or rejecting — your business based on what they see online.</p>

<h2>What Happens Without a Professional Website</h2>

<p>If your business doesn't have a professional website, here's what you're likely experiencing:</p>

<p><strong>You're invisible on Google.</strong> When someone searches for your type of business in your area, your competitors show up. You don't. That means lost customers every single day.</p>

<p><strong>Customers don't trust you.</strong> People research businesses online before making a purchase. If they can't find a professional website, they assume you're not established or trustworthy.</p>

<p><strong>You're losing to competitors.</strong> Even if your competitor has a mediocre website, it's still better than no website at all. They're capturing the customers that should be yours.</p>

<p><strong>You're missing out on inquiries.</strong> A good website works for you 24 hours a day, 7 days a week. It captures leads while you're busy running your business.</p>

<h2>What Makes a Website Actually Work</h2>

<p>Not all websites are created equal. A website that actually generates business has these things:</p>

<p><strong>Fast loading speed.</strong> Your website should load in under 3 seconds. Every extra second costs you visitors.</p>

<p><strong>Mobile-first design.</strong> Most of your visitors are on their phones. If your website doesn't look good on mobile, you're losing most of your potential customers.</p>

<p><strong>Clear contact options.</strong> Visitors should be able to call, WhatsApp, or fill out a form within seconds of landing on your site.</p>

<p><strong>Professional design.</strong> Clean, modern design builds trust. Outdated design destroys it.</p>

<p><strong>SEO foundation.</strong> Your website should be built so Google can find it and rank it for relevant searches.</p>

<h2>The Cost of Not Having a Website</h2>

<p>Let's say your competitor gets just 5 extra inquiries per month because of their website. That's 60 potential customers per year who chose them over you. Depending on your business, that could mean lakhs of rupees in lost revenue.</p>

<p>A professional website is not an expense. It's an investment that pays for itself many times over.</p>

<h2>What to Do Next</h2>

<p>If you don't have a website, or if your current website isn't generating leads, now is the time to fix it. Start by understanding what your business needs, then work with someone who builds websites that actually generate results — not just look pretty.</p>

<p>At GrowthPilot, we build websites specifically designed to generate leads and grow your business. We focus on what matters: speed, mobile experience, and conversion.</p>`,
    faqs: [
      { q: "How much does a professional website cost?", a: "A professional business website typically starts from ₹15,000 to ₹60,000 depending on your requirements. The key is to think of it as an investment, not an expense. A good website generates leads and pays for itself." },
      { q: "How long does it take to build a website?", a: "Most business websites can be built and launched within 3 to 10 days. The timeline depends on the complexity and how quickly you provide the content and feedback." },
      { q: "Do I need technical knowledge to maintain my website?", a: "No. We build websites that are easy to manage. We also provide training and ongoing support so you can make basic updates yourself." },
      { q: "Will my website work well on mobile phones?", a: "Absolutely. We design every website mobile-first, meaning it's built specifically for smartphones first, then adapted for desktop. This is important because most of your visitors will be on their phones." },
    ],
  },
  "local-seo-guide-small-businesses": {
    content: `<p>Here's a question. When someone in your area searches for the service you offer, does your business show up on Google? If not, you're missing out on customers who are actively looking for exactly what you provide.</p>

<p>That's what Local SEO is all about. It's the process of making your business visible in local search results — so when someone nearby searches for your service, they find you first.</p>

<h2>What is Local SEO?</h2>

<p>Local SEO (Search Engine Optimization) is how you optimize your online presence to attract more customers from your local area. It's different from regular SEO because it focuses on a specific geographic location.</p>

<p>For example, if someone searches "dentist near me" or "best restaurant in Pune," Local SEO is what determines which businesses show up at the top of those results.</p>

<p>Here's why it matters: <strong>46% of all Google searches have local intent.</strong> That means almost half of all searches are people looking for businesses near them.</p>

<h2>Why Local SEO is Critical for Small Businesses</h2>

<p>As a small business, you can't compete with big companies on a national level. But you can absolutely dominate your local area. That's the power of Local SEO.</p>

<p><strong>It brings you ready-to-buy customers.</strong> When someone searches for your service locally, they're usually ready to make a decision. They're not just browsing — they're looking for someone to hire or buy from.</p>

<p><strong>It's cost-effective.</strong> Unlike paid advertising that stops working the moment you stop paying, Local SEO keeps working for you over time. Once you rank well, you keep getting visibility.</p>

<p><strong>It builds trust.</strong> Businesses that appear at the top of local search results are perceived as more trustworthy and established.</p>

<h2>The Key Elements of Local SEO</h2>

<p><strong>1. Google Business Profile</strong></p>
<p>This is the single most important thing for Local SEO. Your Google Business Profile is what shows up when someone searches for your business or your service in your area. It includes your address, phone number, photos, reviews, and more.</p>
<p>Make sure your profile is complete, accurate, and regularly updated.</p>

<p><strong>2. Local Keywords</strong></p>
<p>Your website should include keywords that people in your area are actually searching for. For example, "dental clinic in Pune" or "real estate consultant in Mumbai." These location-specific keywords help Google understand where you operate.</p>

<p><strong>3. Customer Reviews</strong></p>
<p>Reviews are one of the biggest ranking factors for local search. Businesses with more positive reviews rank higher. Ask your happy customers to leave a Google review — it makes a real difference.</p>

<p><strong>4. Mobile-Friendly Website</strong></strong></p>
<p>Most local searches happen on mobile phones. If your website doesn't work well on mobile, Google will rank you lower. A fast, mobile-friendly website is essential.</p>

<p><strong>5. Consistent Business Information</strong></p>
<p>Your business name, address, and phone number should be exactly the same everywhere online — your website, Google profile, social media, and any directories. Inconsistency confuses Google and hurts your rankings.</p>

<h2>Simple Steps to Improve Your Local SEO Today</h2>

<p>You don't need to be an expert to start improving your Local SEO. Here are some simple steps you can take right now:</p>

<p><strong>Claim and optimize your Google Business Profile.</strong> Add photos, your business hours, a description of your services, and respond to reviews.</p>

<p><strong>Ask for reviews.</strong> After a successful transaction or appointment, politely ask your customer to leave a Google review. Make it easy for them by sending a direct link.</p>

<p><strong>Add your location to your website.</strong> Make sure your city and area are mentioned on your homepage and contact page.</p>

<p><strong>Create location-specific pages.</strong> If you serve multiple areas, create a page for each area with relevant content.</p>

<p><strong>Keep your website updated.</strong> Regularly add new content, update your information, and keep your site fresh.</p>

<h2>How GrowthPilot Helps with Local SEO</h2>

<p>At GrowthPilot, Local SEO is built into every website we create. We don't just build a pretty website — we make sure it's optimized to rank in local search results from day one.</p>

<p>This includes proper keyword optimization, Google Business Profile setup, mobile-first design, and a structure that search engines love.</p>`,
    faqs: [
      { q: "How long does it take to see results from Local SEO?", a: "You can start seeing improvements within 2-3 months, but significant results typically take 4-6 months of consistent effort. The key is to be patient and consistent." },
      { q: "Can I do Local SEO myself?", a: "Yes, the basics like claiming your Google Business Profile, getting reviews, and updating your website can be done yourself. For more advanced optimization, professional help can speed up the process." },
      { q: "Is Local SEO a one-time thing?", a: "No. Local SEO requires ongoing effort. You need to regularly update your profile, get new reviews, and keep your website fresh to maintain and improve your rankings." },
      { q: "How important are Google reviews for Local SEO?", a: "Very important. Reviews are one of the top ranking factors for local search. Businesses with more positive reviews tend to rank higher and get more clicks." },
    ],
  },
  "website-mistakes-losing-customers": {
    content: `<p>Your website might be costing you customers right now — and you might not even realize it. Most business owners focus on getting a website built, but they don't think about whether that website is actually working to generate leads.</p>

<p>Here are the 7 most common website mistakes that drive potential customers away, and how to fix them.</p>

<h2>Mistake #1: Your Website is Too Slow</h2>

<p>This is the biggest one. If your website takes more than 3 seconds to load, over half of your visitors will leave before they even see your page. They'll go to your competitor's site instead.</p>

<p><strong>Why it happens:</strong> Large, unoptimized images, cheap hosting, too many plugins, and poorly written code.</p>

<p><strong>The fix:</strong> Compress your images, use quality hosting, and make sure your website is built with clean, efficient code. A professional website should load in under 2 seconds.</p>

<h2>Mistake #2: It Doesn't Work Well on Mobile</h2>

<p>More than 60% of web traffic comes from mobile phones. If your website looks broken, has text that's too small, or buttons that are hard to tap on a phone, you're losing the majority of your visitors.</p>

<p><strong>Why it happens:</strong> The website was designed only for desktop and never properly adapted for mobile.</p>

<p><strong>The fix:</strong> Use mobile-first design. This means designing for phones first, then adapting for desktop. Every element should be easy to read and tap on a small screen.</p>

<h2>Mistake #3: No Clear Way to Contact You</h2>

<p>A visitor is interested in your service. They want to reach out. But they can't find your phone number, there's no contact form, and no WhatsApp button. What do they do? They leave.</p>

<p><strong>Why it happens:</strong> Contact information is buried deep in the page or missing entirely.</p>

<p><strong>The fix:</strong> Put your phone number, WhatsApp link, and contact form where they're easy to find — ideally on every page. Make it effortless for visitors to reach you.</p>

<h2>Mistake #4: Outdated Design</h2>

<p>People judge your business by how your website looks. If your design looks like it's from 2015, visitors assume your business is outdated too. First impressions matter.</p>

<p><strong>Why it happens:</strong> The website was built years ago and never updated.</p>

<p><strong>The fix:</strong> A modern, clean design builds trust. You don't need anything fancy — just a professional, up-to-date look that reflects well on your business.</p>

<h2>Mistake #5: No Customer Reviews or Testimonials</h2>

<p>People trust other people more than they trust advertising. If your website doesn't show any reviews or testimonials, visitors have no social proof that you're a good choice.</p>

<p><strong>Why it happens:</strong> Business owners forget to collect and display reviews.</p>

<p><strong>The fix:</strong> Ask your happy customers for testimonials. Display them prominently on your website. Even 3-5 good reviews can significantly increase trust.</p>

<h2>Mistake #6: Too Much Text, Not Enough Visuals</h2>

<p>Walls of text are overwhelming. Visitors don't read every word — they scan. If your pages are filled with long paragraphs and no images, visitors will leave without understanding what you offer.</p>

<p><strong>Why it happens:</strong> Trying to say everything at once without considering how people actually read websites.</p>

<p><strong>The fix:</strong> Use short paragraphs, clear headings, bullet points, and relevant images. Make it easy for visitors to quickly understand your services.</p>

<h2>Mistake #7: No Clear Call-to-Action</h2>

<p>Every page on your website should guide visitors toward taking action — calling you, booking an appointment, or filling out a form. If there's no clear next step, visitors will just leave.</p>

<p><strong>Why it happens:</strong> The website was built without thinking about what the visitor should do next.</p>

<p><strong>The fix:</strong> Add clear calls-to-action on every page. "Book a Free Call," "Get a Free Audit," "Contact Us Today" — make it obvious what the visitor should do.</p>

<h2>The Bottom Line</h2>

<p>Your website is often the first impression potential customers have of your business. If it's slow, outdated, or hard to use, they'll go to your competitor. The good news is that all of these mistakes are fixable.</p>

<p>At GrowthPilot, we build websites that avoid all of these mistakes from the start. Fast, mobile-friendly, and designed to convert visitors into customers.</p>`,
    faqs: [
      { q: "How do I know if my website is too slow?", a: "You can test your website speed for free at Google PageSpeed Insights (pagespeed.web.dev). If your score is below 70, your website needs optimization." },
      { q: "How much does it cost to fix these website problems?", a: "It depends on the severity. Some fixes like adding contact buttons are simple. A complete redesign might cost ₹15,000-60,000. The important thing is to fix them — every day you wait is lost customers." },
      { q: "Can I add reviews to my website myself?", a: "Yes. You can simply ask customers for testimonials and add them to your website. For Google reviews, ask customers to search your business on Google and leave a review." },
      { q: "How often should I update my website?", a: "At minimum, review your website every 6 months. Update any changed information, add new content, and make sure everything still works properly on mobile." },
    ],
  },
  "whatsapp-integration-website": {
    content: `<p>Here's a simple truth: your customers are on WhatsApp. They use it every day. And if they can't reach your business through WhatsApp, they'll find a competitor who offers it.</p>

<p>WhatsApp integration on your website is one of the simplest and most effective ways to generate more inquiries. Let me explain why.</p>

<h2>Why WhatsApp Changes Everything for Local Businesses</h2>

<p>WhatsApp is the most popular messaging app in India, with over 500 million users. People are comfortable using it. They prefer sending a quick message over making a phone call or filling out a form.</p>

<p>When you add WhatsApp to your website, you're meeting your customers where they already are. You're removing the friction between "I'm interested" and "I'm contacting you."</p>

<p>Businesses that add WhatsApp integration to their websites typically see <strong>2-3x more inquiries</strong> compared to those that only offer a contact form or phone number.</p>

<h2>How WhatsApp Integration Works</h2>

<p>It's simple. You add a WhatsApp button to your website. When a visitor clicks it, it opens WhatsApp on their phone with a pre-written message. They hit send, and you get the inquiry.</p>

<p>That's it. No forms to fill out. No waiting for email responses. No phone tag. Just a direct, instant conversation.</p>

<p>The button can be placed in several spots:</p>
<ul>
<li><strong>Floating button</strong> — Always visible in the corner of the screen</li>
<li><strong>Header</strong> — Next to your phone number</li>
<li><strong>Contact page</strong> — Alongside your other contact options</li>
<li><strong>Service pages</strong> — So visitors can inquire about specific services</li>
<li><strong>Bottom of blog posts</strong> — For visitors who want to learn more</li>
</ul>

<h2>Why Customers Prefer WhatsApp</h2>

<p><strong>It's instant.</strong> People expect quick responses on WhatsApp. Unlike email that might take days, WhatsApp messages usually get replied to within hours.</p>

<p><strong>It's convenient.</strong> Visitors don't have to dial a number or fill out a form. One tap and they're talking to you.</p>

<p><strong>It's personal.</strong> WhatsApp feels more personal than a form. Customers feel like they're talking to a real person, not a faceless business.</p>

<p><strong>It's multimedia-friendly.</strong> Customers can send photos, documents, and voice messages. This is especially useful for businesses like interior designers, real estate agents, or doctors where visuals matter.</p>

<h2>Real Results from WhatsApp Integration</h2>

<p>Here's what typically happens when a business adds WhatsApp to their website:</p>

<p><strong>More inquiries.</strong> The lower friction means more people reach out. Even people who were just casually browsing might send a quick message.</p>

<p><strong>Faster response time.</strong> You can reply to WhatsApp messages quickly, often closing deals faster than through email or phone.</p>

<p><strong>Better customer experience.</strong> Customers feel more comfortable asking questions over WhatsApp. This leads to better communication and more trust.</p>

<p><strong>Higher conversion rate.</strong> When it's easy to contact you, more visitors become actual leads. A contact form might convert at 2-3%. WhatsApp can convert at 5-10%.</p>

<h2>Best Practices for WhatsApp on Your Website</h2>

<p><strong>Add a pre-written message.</strong> When someone clicks your WhatsApp button, include a default message like "Hi, I visited your website and would like to know more about your services." This makes it even easier for visitors to reach out.</p>

<p><strong>Respond quickly.</strong> The whole point of WhatsApp is speed. Try to respond within an hour during business hours. Quick responses build trust and close more deals.</p>

<p><strong>Use it alongside other contact methods.</strong> WhatsApp is great, but don't remove your phone number or contact form. Give visitors options.</p>

<p><strong>Place it prominently.</strong> The WhatsApp button should be easy to find. A floating button in the bottom corner is the most common and effective placement.</p>

<h2>How GrowthPilot Implements WhatsApp</h2>

<p>Every website we build at GrowthPilot comes with WhatsApp integration as standard. We place it strategically so visitors can reach you easily, and we set it up with pre-written messages that encourage inquiries.</p>

<p>We also make sure the WhatsApp experience is seamless on mobile — which is where most of your visitors will be contacting you from.</p>`,
    faqs: [
      { q: "Is WhatsApp integration free?", a: "Yes, adding a WhatsApp button to your website is completely free. WhatsApp Business is also free to use. There's no cost beyond your regular internet connection." },
      { q: "Can I use my personal WhatsApp number for business?", a: "You can, but we recommend using WhatsApp Business. It's free and gives you additional features like business hours, quick replies, and a business profile." },
      { q: "Will WhatsApp work on both Android and iPhone?", a: "Yes. WhatsApp works on all smartphones. When a visitor clicks the WhatsApp button, it opens the WhatsApp app on their phone regardless of whether they use Android or iPhone." },
      { q: "How many inquiries can I expect from WhatsApp?", a: "It depends on your website traffic, but businesses typically see a 2-3x increase in inquiries after adding WhatsApp. The key is making it easy for visitors to reach you." },
    ],
  },
  "dental-clinic-website-guide": {
    content: `<p>Running a dental clinic is about more than just good dental work. In today's world, it's also about having a strong online presence that attracts new patients and keeps existing ones coming back.</p>

<p>A well-designed dental clinic website can be your most powerful marketing tool. Let me explain what makes a dental website actually work.</p>

<h2>Why Dental Clinics Need a Professional Website</h2>

<p>Think about how people find a new dentist. They ask friends, yes. But increasingly, they search online. They Google "dentist near me" or "dental clinic in [their city]." If your clinic doesn't show up — or if your website doesn't look professional — they'll choose someone else.</p>

<p>Here's what a good dental website does for your clinic:</p>

<ul>
<li><strong>Attracts new patients</strong> — People searching online can find you</li>
<li><strong>Builds trust</strong> — A professional website makes your clinic look established and credible</li>
<li><strong>Showcases your services</strong> — Visitors can see what treatments you offer before they call</li>
<li><strong>Saves time</strong> — Patients can book appointments online instead of calling</li>
<li><strong>Reduces no-shows</strong> — Automated reminders help patients remember their appointments</li>
</ul>

<h2>Essential Pages for a Dental Clinic Website</h2>

<p><strong>Homepage</strong> — This is your first impression. It should clearly state who you are, where you are, and what you offer. Include a prominent call-to-action like "Book an Appointment."</p>

<p><strong>About Page</strong> — Introduce yourself and your team. Patients want to know who will be treating them. Include your qualifications, experience, and a friendly photo.</p>

<p><strong>Services/Treatments Page</strong></strong></strong> — List all the treatments you offer. For each treatment, include a brief explanation of what it is, who it's for, and what to expect. Common pages include teeth whitening, root canals, braces, dental implants, and general checkups.</p>

<p><strong>Patient Testimonials</strong> — Reviews from happy patients build trust. Include real testimonials with names and photos if possible.</p>

<p><strong>Contact Page</strong> — Your address, phone number, WhatsApp link, and a contact form. Include a Google Map so patients can find you easily.</p>

<p><strong>FAQ Page</strong> — Answer common questions like "How often should I visit the dentist?" or "Do you accept insurance?"</p>

<h2>Features That Make a Dental Website Stand Out</h2>

<p><strong>Online Appointment Booking</strong> — Let patients book appointments directly from your website. This is convenient for them and saves your staff time.</p>

<p><strong>Before and After Gallery</strong> — Showcase your work with before and after photos (with patient consent). This is one of the most powerful ways to build trust.</p>

<p><strong>Mobile-First Design</strong> — Most patients will visit your website on their phone. It needs to look and work perfectly on mobile.</p>

<p><strong>WhatsApp Integration</strong> — Let patients send a quick message to ask questions or book appointments. It's fast and convenient.</p>

<p><strong>Fast Loading Speed</strong> — A slow website frustrates visitors. Your site should load in under 3 seconds.</p>

<p><strong>Local SEO</strong> — Your website should be optimized to show up when people search for dentists in your area.</p>

<h2>Common Mistakes Dental Clinics Make Online</h2>

<p><strong>No website at all.</strong> This is the biggest one. If you don't have a website, you're invisible to potential patients who search online.</p>

<p><strong>Outdated website.</strong> An old, poorly maintained website hurts your credibility more than no website at all.</p>

<p><strong>No photos or personality.</strong> Patients want to see who they'll be visiting. A website with no photos feels impersonal and untrustworthy.</p>

<p><strong>Hard to contact.</strong> If patients can't easily find your phone number or a way to book an appointment, they'll go to a competitor.</p>

<p><strong>Not mobile-friendly.</strong> If your website doesn't work well on phones, you're losing most of your potential patients.</p>

<h2>What to Look for in a Dental Website Partner</h2>

<p>When choosing someone to build your dental clinic website, look for:</p>

<ul>
<li>Experience building healthcare or dental websites</li>
<li>Understanding of local SEO for medical practices</li>
<li>Mobile-first design approach</li>
<li>WhatsApp and appointment booking integration</li>
<li>Ongoing support and maintenance</li>
</ul>

<h2>How GrowthPilot Helps Dental Clinics</h2>

<p>At GrowthPilot, we've built websites for healthcare businesses. We understand what makes patients choose one clinic over another. We build dental websites that are fast, mobile-friendly, and designed to generate appointment bookings.</p>

<p>Every dental website we build includes WhatsApp integration, appointment booking, service pages, and local SEO optimization.</p>`,
    faqs: [
      { q: "How much does a dental clinic website cost?", a: "A professional dental clinic website typically costs between ₹20,000 to ₹60,000 depending on the features you need. This includes design, content, appointment booking, and SEO setup." },
      { q: "How long does it take to build a dental website?", a: "Most dental websites can be completed within 7-14 days. The timeline depends on how quickly you provide content like service descriptions and photos." },
      { q: "Can patients really book appointments online?", a: "Yes. We integrate appointment booking systems that let patients select a date and time directly from your website. You'll receive the booking details instantly." },
      { q: "Will my website show up when people search for dentists in my area?", a: "Yes. We optimize every website for local SEO, which means it's designed to rank well when people search for dental services in your area." },
    ],
  },
  "cost-of-website-india-2025": {
    content: `<p>One of the most common questions we hear is: "How much does a website actually cost in India?" It's a fair question, and the answer isn't as straightforward as you might think.</p>

<p>The cost of a website can range from ₹5,000 to ₹5,00,000 or more. That's a huge range. So let me break it down so you can understand what you're actually paying for.</p>

<h2>Why Website Costs Vary So Much</h2>

<p>Not all websites are the same. A simple 5-page informational website is very different from a complex e-commerce store with hundreds of products. The cost depends on what you need.</p>

<p>Here's a general breakdown:</p>

<h2>Budget Websites: ₹5,000 - ₹15,000</h2>

<p>At this price point, you're usually getting a basic website built using templates. It might look okay, but it often lacks:</p>
<ul>
<li>Custom design — it looks like other websites</li>
<li>Mobile optimization — might not work well on phones</li>
<li>SEO setup — Google might not find it easily</li>
<li>Speed optimization — could be slow</li>
<li>Ongoing support — you're on your own after delivery</li>
</ul>

<p>This might work for a very small business that just needs a basic online presence. But it's unlikely to generate significant leads or revenue.</p>

<h2>Professional Business Websites: ₹15,000 - ₹60,000</h2>

<p>This is the sweet spot for most local businesses. At this price, you get:</p>
<ul>
<li><strong>Custom design</strong> — Built specifically for your business, not a template</li>
<li><strong>Mobile-first</strong> — Designed for smartphones first</li>
<li><strong>SEO foundation</strong> — Optimized so Google can find you</li>
<li><strong>Fast loading</strong> — Optimized for speed</li>
<li><strong>Contact integration</strong> — Phone, WhatsApp, contact forms</li>
<li><strong>Content</strong> — Professional copy that explains your services</li>
<li><strong>Support</strong> — Help after the website goes live</li>
</ul>

<p>This is what most businesses need. A professional website that generates leads and helps you grow.</p>

<h2>Premium Websites: ₹60,000 - ₹2,00,000</h2>

<p>For businesses that need more advanced features:</p>
<ul>
<li><strong>Online booking systems</strong> — Appointments, reservations</li>
<li><strong>E-commerce functionality</strong> — Selling products online</li>
<li><strong>Custom animations</strong> — Interactive elements</li>
<li><strong>Advanced SEO</strong> — Competitive keyword targeting</li>
<li><strong>Multiple language support</strong> — Hindi, English, etc.</li>
<li><strong>CRM integration</strong> — Customer management</li>
<li><strong>Analytics dashboard</strong> — Track your website performance</li>
</ul>

<h2>What Should You Actually Pay?</h2>

<p>The right question isn't "what's the cheapest website?" It's "what do I need to grow my business?"</p>

<p>Think about it this way: if your website generates just 5 extra inquiries per month, and each inquiry is worth ₹5,000 to your business, that's ₹25,000 per month or ₹3,00,000 per year. A ₹30,000 website pays for itself in less than 2 months.</p>

<p>Here's what we recommend for different types of businesses:</p>

<p><strong>New businesses:</strong> Start with a professional website in the ₹15,000-30,000 range. Get online, start generating leads, and upgrade as you grow.</p>

<p><strong>Established businesses:</strong> Invest in a premium website with booking systems and advanced features. The ROI is worth it.</p>

<p><strong>E-commerce businesses:</strong> Budget for ₹60,000+ to get proper product pages, payment integration, and a smooth shopping experience.</p>

<h2>Hidden Costs to Watch Out For</h2>

<p>When comparing website prices, make sure you understand what's included:</p>

<p><strong>Domain name:</strong> ₹500-1,000 per year for a .com or .in domain</p>
<p><strong>Hosting:</strong> ₹2,000-10,000 per year depending on quality</p>
<p><strong>SSL certificate:</strong> Often included, but some charge extra</p>
<p><strong>Content writing:</strong> Some include it, some charge separately</p>
<p><strong>Maintenance:</strong> Monthly or yearly fees for updates and support</p>
<p><strong>SEO services:</strong> Ongoing SEO is usually a separate service</p>

<p>At GrowthPilot, our pricing is transparent. The quoted price includes design, development, content, hosting for the first year, SSL, and 30 days of support. No hidden charges.</p>

<h2>The Real Cost of a Cheap Website</h2>

<p>A cheap website might save you money upfront, but it can cost you dearly in lost business. A slow, poorly designed website that doesn't work on mobile is actively driving customers away from your business.</p>

<p>Investing in a professional website is investing in your business's growth. It's not an expense — it's a tool that works for you 24 hours a day, 7 days a week.</p>`,
    faqs: [
      { q: "Is a free website builder (like Wix or WordPress.com) good enough?", a: "Free website builders can work for personal projects, but for a business, they have serious limitations. Your website will have their branding, limited features, poor SEO, and you don't fully own it. A professional website is a better long-term investment." },
      { q: "Do I need to pay for hosting every year?", a: "Yes. Hosting is like rent for your website — it's what keeps your website accessible on the internet. Good hosting costs ₹2,000-10,000 per year and is essential for a fast, reliable website." },
      { q: "Can I build a website myself to save money?", a: "You can, but consider the value of your time. Learning to build a website, writing content, optimizing for SEO, and maintaining it takes hundreds of hours. For most business owners, it's more cost-effective to hire a professional." },
      { q: "What's included in GrowthPilot's website packages?", a: "Our packages include custom design, mobile-first development, SEO setup, content writing, WhatsApp integration, contact forms, hosting for the first year, SSL certificate, and 30 days of free support after launch." },
    ],
  },
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const article = articleContent[post.slug];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Swami Chaudhari",
      url: "https://growthpilot.in/about",
    },
    publisher: {
      "@type": "Organization",
      name: "GrowthPilot",
      logo: {
        "@type": "ImageObject",
        url: "https://growthpilott.vercel.app/og-image.svg",
      },
    },
    datePublished: post.date || "2025-01-01",
    dateModified: post.date || "2025-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://growthpilott.vercel.app/blog/${post.slug}`,
    },
  };

  const faqJsonLd =
    article?.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq: { q: string; a: string }) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-10 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-accent-primary text-sm font-medium mb-4 md:mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <span className="text-xs font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
            <span className="text-text-muted text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
            {post.date && (
              <span className="text-text-muted text-xs flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 md:mb-4 tracking-tight leading-tight">{post.title}</h1>
          <p className="text-text-secondary text-sm md:text-base">{post.excerpt}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-sm md:prose-base max-w-none
              prose-headings:text-text-primary prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-xl md:prose-h2:text-2xl prose-h2:mt-8 md:prose-h2:mt-10 prose-h2:mb-3 md:prose-h2:mb-4
              prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:pl-5
              prose-li:text-text-secondary prose-li:mb-1.5
              prose-strong:text-text-primary
              prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article?.content || "" }}
          />
        </div>
      </section>

      {/* FAQ Section */}
      {article?.faqs && article.faqs.length > 0 && (
        <section className="py-10 md:py-16 px-4 bg-bg-primary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-6 md:mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3 md:space-y-4">
              {article.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-border p-4 md:p-5 shadow-subtle">
                  <h3 className="font-semibold text-text-primary text-sm md:text-base mb-2">{faq.q}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-6 md:mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="bg-bg-primary rounded-xl border border-border p-4 md:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                <span className="text-[10px] font-bold text-accent-primary bg-accent-primary/10 px-2 py-0.5 rounded-full">{rp.category}</span>
                <h3 className="text-sm md:text-base font-bold text-text-primary mt-2 mb-1.5 group-hover:text-accent-primary transition-colors">{rp.title}</h3>
                <p className="text-text-secondary text-xs md:text-sm line-clamp-2">{rp.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 px-4 bg-gradient-cta text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Ready to Grow Your Business?</h2>
          <p className="text-white/70 mb-6 md:mb-8 text-sm md:text-base">Let&apos;s build a website that actually generates leads for your business.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-white text-accent-primary font-semibold px-6 py-4 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2 min-h-[48px]">
              <Phone className="w-5 h-5" /> Book Free Strategy Call
            </Link>
            <a href={`https://wa.me/919356733878?text=Hi, I'd like to discuss my business growth.`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6 py-4">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

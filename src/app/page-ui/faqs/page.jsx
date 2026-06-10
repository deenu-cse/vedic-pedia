import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        value: "item-1",
        question: "What are the four Vedas and what do they contain?",
        answer: "The four Vedas are Rig Veda, Sam Veda, Yajur Veda, and Atharva Veda. Each contains a collection of hymns, mantras, rituals, and philosophical teachings. The Rig Veda is the oldest with hymns to deities, Sam Veda contains melodies and chants, Yajur Veda focuses on ritual procedures, and Atharva Veda includes spells, charms, and everyday wisdom."
    },
    {
        value: "item-2",
        question: "How old are the Vedas?",
        answer: "The Vedas are among the oldest known scriptures in the world, estimated to have been composed between 1500 BCE and 1200 BCE, though some scholars place their origins even earlier. They were passed down orally for thousands of years before being written down, making them a remarkable feat of human memory and tradition."
    },
    {
        value: "item-3",
        question: "What is the significance of the Vedas in Hinduism?",
        answer: "The Vedas are considered 'Shruti' (that which is heard), meaning they are divine revelations received by ancient sages (Rishis). They form the foundational scripture of Hinduism and are the ultimate authority on dharma, spiritual knowledge, and the nature of existence. All major schools of Hindu philosophy trace their roots back to Vedic teachings."
    },
    {
        value: "item-4",
        question: "What language are the Vedas written in?",
        answer: "The Vedas are written in Vedic Sanskrit, an ancient form of Sanskrit that is older and more complex than Classical Sanskrit. It is considered one of the oldest attested members of the Indo-European language family. Studying Vedic Sanskrit requires specialized knowledge, and scholars dedicate years to understanding the nuances of its grammar and vocabulary."
    },
    {
        value: "item-5",
        question: "What is the difference between the Vedas and Upanishads?",
        answer: "The Vedas primarily contain hymns, rituals, and ceremonial knowledge, while the Upanishads are the philosophical concluding portions of the Vedas (also called Vedanta — 'end of the Vedas'). The Upanishads explore deeper spiritual concepts like Brahman (universal consciousness), Atman (individual soul), and the nature of reality, moving from ritualistic practice toward philosophical inquiry."
    },
    {
        value: "item-6",
        question: "Can anyone read and study the Vedas?",
        answer: "Yes, the Vedas are open to all seekers of knowledge. Traditionally, studying the Vedas was done under the guidance of a Guru in a Gurukul system. Today, translations and commentaries in Hindi, English, and many other languages make them accessible worldwide. Organizations and institutions across India and globally offer structured Vedic studies for anyone interested."
    },
]

export default function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full bg-[#EDE6D6] p-3">
            {faqs.map((faq) => (
                <AccordionItem key={faq.value} value={faq.value}>
                    <AccordionTrigger className="border-b-[1.6px] border-[#713700ea] text-[#411900] font-semibold text-left">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5a2d00] leading-relaxed">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
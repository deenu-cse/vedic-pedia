"use client";

import Image from "next/image";
import {
    Check,
    Copy,
    HeartHandshake,
    Landmark,
    QrCode,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { useState } from "react";

const upiId = "vimalwadhawang@okaxis";

const bankAccounts = [
    {
        name: "SWAMI SHUKDEVANAND TRUST",
        account: "10373187320",
        bank: "STATE BANK OF INDIA",
        branch: "SWARGASHRAM",
        ifsc: "SBIN0002493",
    },
    {
        name: "Swami Shukdevanand Trust",
        account: "0836020100018562",
        bank: "Punjab National Bank",
        branch: "Jonk Swargashram",
        ifsc: "PUNB0792900",
    },
    {
        name: "Swami Shukdevanand Trust",
        account: "039194600000911",
        bank: "YES Bank",
        branch: "Dehradun Road, Rishikesh",
        ifsc: "YESB0000391",
    },
];

const formatBankDetails = (account) =>
    `${account.name}\nAccount No.: ${account.account}\nBank Name: ${account.bank}\nBranch: ${account.branch}\nIFSC: ${account.ifsc}`;

const CopyButton = ({ value, label, copiedKey, onCopy }) => {
    const copied = copiedKey === value;

    return (
        <button
            type="button"
            onClick={() => onCopy(value)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#8b5a2b]/20 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#582b0f] shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
        >
            {copied ? <Check className="h-4 w-4 text-[#1f7a3a]" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : label}
        </button>
    );
};

const DetailItem = ({ label, value }) => (
    <div className="rounded-xl bg-[#fff8e8]/80 p-3">
        <dt className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#8b5a2b]">
            {label}
        </dt>
        <dd className="mt-1.5 break-words text-sm font-semibold text-[#411900]">
            {value}
        </dd>
    </div>
);

const BankCard = ({ account, copiedKey, onCopy }) => (
    <article className="group rounded-[20px] border border-[#8b5a2b]/15 bg-white/60 p-4 shadow-lg shadow-[#411900]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#411900]/10">
        <div className="flex items-start justify-between gap-4">
            <div>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#582b0f] text-[#f5d9a8] shadow-lg shadow-[#582b0f]/20">
                    <Landmark className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-bold leading-tight text-[#411900]">
                    {account.name}
                </h3>
            </div>
            <CopyButton
                value={formatBankDetails(account)}
                label="Copy"
                copiedKey={copiedKey}
                onCopy={onCopy}
            />
        </div>

        <dl className="mt-4 grid gap-2">
            <DetailItem label="Account No." value={account.account} />
            <DetailItem label="Bank Name" value={account.bank} />
            <DetailItem label="Branch" value={account.branch} />
            <DetailItem label="IFSC" value={account.ifsc} />
        </dl>
    </article>
);

const YourContribution = () => {
    const [copiedKey, setCopiedKey] = useState("");

    const copyToClipboard = async (text) => {
        await navigator.clipboard.writeText(text);
        setCopiedKey(text);
        window.setTimeout(() => setCopiedKey(""), 1800);
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#EDE6D6] text-[#411900] -mt-8 pb-0">
            <section className="relative -mt-8 overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8ead0] via-[#EDE6D6] to-[#d5b267]/60" />
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage: "radial-gradient(circle, #713700 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                <div className="absolute -right-24 top-16 h-80 w-80 rounded-full border border-[#411900]/10" />
                <div className="absolute -left-28 bottom-0 h-96 w-96 rounded-full border border-[#411900]/10" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
                    <div className="text-center lg:text-left">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#411900]/15 bg-white/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#8b5a2b]">
                            <HeartHandshake className="h-4 w-4" />
                            Your Contribution
                        </span>
                        <h1 className="mt-6 font-serif text-5xl font-extrabold leading-tight text-[#411900] sm:text-6xl lg:text-7xl">
                            Support The Vedic Pedia Mission
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#411900]/80 lg:mx-0 lg:text-lg">
                            Your contribution helps sustain Vedic study, research, app updates,
                            and the wider devotional work of sharing timeless wisdom.
                        </p>
                        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:max-w-2xl">
                            {["Secure details", "UPI enabled", "Bank transfer"].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-[#411900]/10 bg-white/45 px-4 py-3 text-sm font-semibold text-[#582b0f]"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[30px] border border-[#8b5a2b]/15 bg-[#1a0a02] p-6 text-center text-[#f5d9a8] shadow-2xl shadow-[#411900]/20">
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d5b267]/15">
                            <QrCode className="h-7 w-7" />
                        </div>
                        <h2 className="font-serif text-3xl font-bold">Scan and Contribute</h2>
                        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#f5e6cf]/80">
                            Use the QR code or copy the UPI ID below.
                        </p>

                        <div className="mx-auto mt-7 flex w-full max-w-sm justify-center rounded-[26px] bg-white p-5 shadow-xl">
                            <Image
                                width={280}
                                height={280}
                                src="/images/qr.jpg"
                                className="h-auto w-full max-w-[280px] rounded-2xl object-cover"
                                alt="Contribution QR code"
                                priority
                            />
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#d5b267]/25 bg-white/10 p-4">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d5b267]">
                                UPI ID
                            </p>
                            <div className="mt-3 flex flex-col items-center justify-between gap-3 rounded-full bg-[#f5d9a8] px-5 py-3 text-[#411900] sm:flex-row">
                                <span className="break-all text-sm font-bold">{upiId}</span>
                                <CopyButton
                                    value={upiId}
                                    label="Copy UPI"
                                    copiedKey={copiedKey}
                                    onCopy={copyToClipboard}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-[#FF5E03]">
                            <Landmark className="h-4 w-4" />
                            Direct Bank Transfer
                        </span>
                        <h2 className="mt-3 font-serif text-4xl font-bold text-[#411900]">
                            Bank Transfer Options
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#411900]/70 sm:text-base">
                            Choose any account below and copy the complete transfer details in
                            one click.
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {bankAccounts.map((account) => (
                            <BankCard
                                key={`${account.bank}-${account.account}`}
                                account={account}
                                copiedKey={copiedKey}
                                onCopy={copyToClipboard}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-6xl gap-6 rounded-[30px] bg-[#411900] p-8 text-[#f5d9a8] shadow-2xl shadow-[#411900]/20 md:grid-cols-[0.8fr_1.2fr] md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#d5b267]/15">
                        <ShieldCheck className="h-10 w-10" />
                    </div>
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#d5b267]">
                            <Sparkles className="h-4 w-4" />
                            Devotional Support
                        </span>
                        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                            Every Contribution Helps The Work Continue
                        </h2>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#f5e6cf]/85 sm:text-base">
                            Your participation, contribution, and encouragement support the
                            ongoing research and sharing of Vedic knowledge for seekers
                            everywhere.
                        </p>
                    </div>
                </div>
            </section>
            <div className="w-full mt-8">
                <Image
                    src="/images/border.png"
                    alt="Vedic Border"
                    width={1920}
                    height={150}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>
        </main>
    );
};

export default YourContribution;

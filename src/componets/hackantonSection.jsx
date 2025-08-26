// src/components/HackathonSection.jsx
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "./button";

export default function HackathonSection() {
  return (
    <section className="w-full bg-white py-16 "
    style={{ backgroundImage: 'url("/bgimage.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        {/* Left side - Text content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Build the Future of Identity with Intuition
          </h1>
          <p className="text-lg text-white mb-4">
            Join the hackathon to explore decentralized identity, attestations, and NFTs.
          </p>
          <ul className="list-disc pl-5 text-white space-y-2 mb-6">
            <li>Collaborate with top builders</li>
            <li>Experiment with Web3 identity</li>
            <li>Win bounties and prizes</li>
          </ul>
          <p className="text-white italic">
            "Your identity, verified by the network."
          </p>
        </div>

        {/* Right side - Card with buttons */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
            Get Started
          </h2>
          <Button className='flex center w-full bg-sky-500 hover:bg-sky-600 text-white '>
          <ConnectButton className="w-full bg-gray-800 hover:bg-gray-900 text-white">
            Connect Wallet
          </ConnectButton>
          </Button>
          <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white">
            Connect Twitter
          </Button>
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            Connect Gmail
          </Button>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Mint NFT
          </Button>
        </div>
      </div>
    </section>
  );
}

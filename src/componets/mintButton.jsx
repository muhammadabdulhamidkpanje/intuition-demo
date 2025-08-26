import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { useState } from "react";
import { toast } from "react-hot-toast";
import CONTRACT_ABI from "../contracts/NFT.json";
import CONTRACT_ADDRESS from "../contracts/contract-address.json";

export default function MintButton({ }) {
  const { address, isConnected } = useAccount();
  const [isMinting, setIsMinting] = useState(false);

  const { data, write } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "mint",
    args: [address],
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleMint = () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }
    // if (!twitter || !gmail) {
    //   toast.error("Please add Twitter & Gmail before minting");
    //   return;
    // }
    setIsMinting(true);
    write?.();
  };

  if (isSuccess) {
    toast.success(`NFT minted! 🎉 View on Etherscan: ${data?.hash}`);
    setIsMinting(false);
  }

  return (
    <button
      onClick={handleMint}
      disabled={isMinting || isLoading || !isConnected}
      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 disabled:opacity-40"
    >
      {isMinting || isLoading ? "Minting..." : "Mint NFT"}
    </button>
  );
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const TELEGRAM_USERNAME = "Anonymous_department"

export default function GiftPage() {
  const [giftOpened, setGiftOpened] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)

  const openGift = () => {
    setGiftOpened(true)
    setTimeout(() => {
      setShowSurprise(true)
    }, 1200)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {!giftOpened ? (
            <motion.div
              key="gift-box"
              onClick={openGift}
              className="cursor-pointer relative"
            >
              <motion.img
                src="/gifs/gift.gif"
                alt="Gift"
                className="w-56 h-56 mx-auto"
                animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-pink-200 mt-6 text-xl">
                Click to open..! 🎁✨
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              {/* Teddy */}
              <div className="relative">
                <div className="absolute inset-0 w-64 h-64 mx-auto bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
                <img
                  src="/gifs/teddy-giving-flower.gif"
                  alt="Teddy"
                  className="w-52 mx-auto relative z-10"
                />
              </div>

              <AnimatePresence>
                {showSurprise && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-8 max-w-lg mx-auto"
                  >
                    {/* 💌 TWINKLING TELEGRAM BUTTON */}
                    <motion.button
                      onClick={() =>
                        window.open(
                          `https://t.me/${TELEGRAM_USERNAME}`,
                          "_blank"
                        )
                      }
                      animate={{
                        scale: [1.2, 1.35, 1.2],
                        rotate: [0, 3, -3, 0],
                        filter: [
                          "drop-shadow(0 0 6px rgba(255,182,193,0.6))",
                          "drop-shadow(0 0 14px rgba(255,105,180,0.9))",
                          "drop-shadow(0 0 6px rgba(255,182,193,0.6))",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.3 }}
                      className="mx-auto text-5xl cursor-pointer"
                    >
                      💌
                    </motion.button>

                    {/* Text */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-2xl text-pink-300"
                    >
                      Tumhe flowers bahoot pasnd h na..!🫠
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-lg text-purple-200"
                    >
                      Ye Rose kabhi nhi murjhayega.🌹<br /><br/>
                      Abhi to bahoot kuch sikhna tha tmse.<br/>
                      or tmne kha tha tm sikhaogi..😓<br/>
                      I promise ki tumhara Dil phir kabhi nhi dukhaunga...💖
                      <br /><br />
                      Plz unblock krdona...😔<br />
                      accha nhi lgg rha.<br/>
                      kisi se zidd nhi krni chahey, but..<br/>
                      Tumhe khona nhi chahta...
                      <br />
                      Efforts krley, abb intezar krunga...<br />
                      (shiddat se 💫)
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-xl text-pink-200"
                    >
                      Ananya...! 💕<br />
                      Plz tm aana jrur...<br/>
                      hrr raat tumhe "Oija board" se bulaunga...<br/>
                      Tmm aaogi na Anu...?😔<br /><br/>
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

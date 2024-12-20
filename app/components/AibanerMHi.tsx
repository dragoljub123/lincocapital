import Image from "next/image";
import Link from "next/link";

const AibanerMHi = () => {
  return (
    <div className="mx-auto p-5 md:p-10 text-white">
      {/* Naslov */}
      <h2 className="text-2xl font-black mb-2 ">कैपिटलरेवो ए आई समर्थन</h2>
      <div className="   ">
        <hr className="border-t-[2px] border-[#00dbfe] w-[90%] my-2 " />
      </div>

      {/* Podnaslov */}
      <h3 className="text-lg mb-4 font-bold">
        अपनी ट्रेडिंग सफलता से अनुमान लगाने से बचें!
      </h3>

      {/* Slika */}
      <div className="w-full mb-4">
        <Image
          src="/HP AI Image-min.png" // zameni sa putanjom do tvoje slike
          alt="Opis slike"
          width={500} // prilagodi širinu
          height={500} // prilagodi visinu
          className="w-full"
        />
      </div>

      {/* Prvi paragraf */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          बेजोड़ प्रोसेसिंग स्पीड
        </h3>
        <p className="text-xs">
          ए आई ट्रेडिंग बॉट वास्तविक समय में बाजार के विशाल डेटा को संभालते हैं,
          किसी भी इंसान की तुलना में तेज़ी से इसका विश्लेषण करते हैं। यह बिजली
          की तरह तेज़ गति सुनिश्चित करती है कि आप सूचित ट्रेडिंग निर्णय लेने में
          हमेशा एक कदम आगे रहें।
        </p>
      </div>

      {/* Drugi paragraf */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          निरंतर सीखना और सुधार
        </h3>
        <p className="text-xs">
          बिल्ट-इन मशीन लर्निंग के साथ, ये बॉट लगातार विकसित होते रहते हैं। वे
          बाजार के रुझानों की अपनी समझ को गहरा करने के लिए डेटा के हर बिट का
          विश्लेषण करते हैं, जिससे वे प्रत्येक ट्रेड के साथ अनुकूलन और सुधार
          करने में सक्षम होते हैं।
        </p>
      </div>

      {/* Treći paragraf */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          उन्नत विश्लेषणात्मक शक्ति
        </h3>
        <p className="text-xs">
          ए आई ट्रेडिंग सिस्टम एक साथ कई बाजारों में जटिल तकनीकी विश्लेषण आसानी
          से करते हैं, कुछ सेकंड में प्रमुख मूल्य रुझानों की पहचान करते हैं -
          ऐसा काम जिसे पूरा करने में इंसानों को घंटों लग सकते हैं।
        </p>
      </div>

      {/* Četvrti paragraf */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          भावनाहीन, डेटा-संचालित निर्णय
        </h3>
        <p className="text-xs">
          केवल डेटा द्वारा संचालित, ट्रेडिंग बॉट भावनात्मक निर्णय लेने को खत्म
          करते हैं, केवल आँकड़ों पर ध्यान केंद्रित करते हैं। कोई डर या लालच नहीं
          - आपकी ट्रेडिंग रणनीति को अनुकूलित करने के लिए केवल सटीक, तर्कसंगत
          कदम।
        </p>
      </div>

      {/* Peti paragraf */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-[#00dbfe]">
          सभी के लिए बाजार तक पहुँच
        </h3>
        <p className="text-xs">
          ए आई ट्रेडिंग बॉट वित्तीय पृष्ठभूमि, निवेश के आकार या समय की
          प्रतिबद्धता की परवाह किए बिना उच्च-स्तरीय बाजार विशेषज्ञता को सभी के
          लिए सुलभ बनाते हैं। आप खुद विशेषज्ञ होने की आवश्यकता के बिना
          विशेषज्ञ-स्तरीय ट्रेडिंग का लाभ उठा सकते हैं।
        </p>
      </div>

      {/* Dugme Learn More */}
      <div className="mt-3 ">
        <Link href="/hi/ai-support">
          <button className="bg-white text-navcolor font-bold py-2 px-4 w-48 h-12 rounded-lg shadow transition hover:bg-[#00dbfe]">
            और जानें
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AibanerMHi;

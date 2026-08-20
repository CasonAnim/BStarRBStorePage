import React from "react";

export default function ExtraContent() {
  return (
    <section className="max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10 text-slate-300">
        
        {/* ส่วนหัวข้อหลัก */}
        <div className="border-b border-slate-800 pb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            ซื้อขายไอดี Brawl Stars
          </h2>
          <h3 className="text-sm sm:text-base font-semibold text-yellow-400">
            ซื้อและขายไอดี Brawl Stars ราคาประหยัดจากผู้ขายที่น่าเชื่อถือ
          </h3>
        </div>

        {/* ย่อหน้าเกริ่นนำ */}
        <p className="text-sm sm:text-base leading-relaxed">
          พร้อมที่จะครองสนามประลองด้วยนักสู้ในตำนานและสกินสุดเอ็กซ์คลูซีฟแล้วหรือยัง? เบื่อกับการฟาร์มถ้วย ปลดล็อกตัวละคร และอัปเลเวลพาวเวอร์แบบไม่รู้จบใช่ไหม? ที่เว็บไซต์ของเรา คุณจะได้พบกับไอดีและบริการเกม Brawl Stars ระดับพรีเมียมที่ช่วยให้คุณเข้าถึงนักสู้ทั้งหมด, ไฮเปอร์ชาร์จ (Hypercharges) ขั้นสุดยอด, การอัปเกรดบัฟฟี่ และถ้วยรางวัลนับพันได้อย่างรวดเร็วโดยไม่ต้องเสียเวลาฟาร์ม ไม่ว่าคุณจะเป็นผู้เล่นใหม่ที่เพิ่งเริ่มต้นเดินทางบน Starr Road หรือผู้เล่นสายแข่งขั้นเทพที่กำลังมองหาไอดีเลเวลตันพร้อมถ้วยรางวัล 50,000+ ถ้วยและสกินพิเศษ การซื้อบริการ Brawl Stars จากเราจะช่วยให้คุณได้เปรียบในการแข่งขันโหมดเกมต่างๆ และไต่อันดับในลีคการแข่งขันชิงแชมป์ได้อย่างง่ายดาย
        </p>

        {/* ทำไมต้องซื้อบริการ */}
        <div className="space-y-4">
          <h4 className="text-lg sm:text-xl font-bold text-yellow-300">
            ทำไมต้องซื้อบริการ Brawl Stars กับเรา?
          </h4>
          <p className="text-sm text-slate-400">นี่คือเหตุผลที่เว็บไซต์ของเราคือตลาดกลางที่ดีที่สุดสำหรับ Brawl Stars:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <span className="text-yellow-400 text-lg font-bold">⚡</span>
              <div>
                <strong className="text-white block mb-1">เข้าถึงนักสู้ทั้งหมดได้ทันที:</strong>
                <span className="text-xs sm:text-sm text-slate-300">ข้ามเวลาการเล่นสะสมหลายเดือนและเริ่มต้นด้วยนักสู้มากกว่า 100 ตัว รวมถึงตัวละครระดับตำนาน (Legendaries), และตัวละครใหม่ล่าสุด</span>
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <span className="text-yellow-400 text-lg font-bold">⚡</span>
              <div>
                <strong className="text-white block mb-1">พาวเวอร์เลเวลสูงสุดและไฮเปอร์ชาร์จ:</strong>
                <span className="text-xs sm:text-sm text-slate-300">รับไอดีที่มีนักสู้พาวเวอร์เลเวล 11, ปลดล็อกไฮเปอร์ชาร์จทั้งหมด และระบบอัปเกรดอื่นๆ อย่างเต็มรูปแบบ</span>
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <span className="text-yellow-400 text-lg font-bold">⚡</span>
              <div>
                <strong className="text-white block mb-1">ประหยัดเวลาได้หลายร้อยชั่วโมง:</strong>
                <span className="text-xs sm:text-sm text-slate-300">หลีกเลี่ยงการดันถ้วยที่น่าเบื่อ การเดินหน้าบนสแตร์โรดที่ช้า และการฟาร์มพาวเวอร์พอยต์ที่มีราคาแพง</span>
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <span className="text-yellow-400 text-lg font-bold">⚡</span>
              <div>
                <strong className="text-white block mb-1">สกินและของตกแต่งสุดพิเศษ:</strong>
                <span className="text-xs sm:text-sm text-slate-300">เข้าถึงสกินลิมิเต็ดหายากจากซีซั่นก่อนๆ, คอลลาบอเรชันพิเศษ และรางวัลจาก Brawl Pass</span>
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <span className="text-yellow-400 text-lg font-bold">⚡</span>
              <div>
                <strong className="text-white block mb-1">ไอดีถ้วยรางวัลสูง:</strong>
                <span className="text-xs sm:text-sm text-slate-300">รับไอดีพร้อมแข่งที่มีถ้วยรางวัลรวมมากกว่า 100,000+ ถ้วย และแรงค์ระดับสูง</span>
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex items-start gap-3">
              <span className="text-yellow-400 text-lg font-bold">⚡</span>
              <div>
                <strong className="text-white block mb-1">ระบบความปลอดภัย & ซัพพอร์ต:</strong>
                <span className="text-xs sm:text-sm text-slate-300">ผู้ขายผ่านการยืนยันตัวตน พร้อมระบบชำระเงินที่เข้ารหัสความปลอดภัย และทีมซัพพอร์ตคอยดูแลตลอด 24 ชั่วโมง</span>
              </div>
            </div>
          </div>
        </div>

        {/* ประเภทบริการ */}
        <div className="space-y-3 bg-slate-950/40 p-6 rounded-2xl border border-slate-800">
          <h4 className="text-lg font-bold text-white">ประเภทบริการ Brawl Stars สำหรับการซื้อขาย</h4>
          <p className="text-sm leading-relaxed">
            <strong className="text-yellow-400">ไอดีเริ่มต้น (Starter Accounts):</strong> ถ้วยรางวัลเริ่มต้น 100-400 ถ้วย พร้อมปลดล็อกนักสู้ 10-30 ตัว, พาวเวอร์เลเวล 7–9 สำหรับนักสู้หลัก และมีแก็ดเจ็ต/สตาร์พาวเวอร์บางส่วน ที่เว็บไซต์ของเราคุณสามารถซื้อไอดี Brawl Stars ตั้งแต่ไอดีเริ่มต้นราคาประหยัดไปจนถึงโปรไฟล์ระดับสูงที่ปั้นมาจนเต็ม โดยทุกการซื้อจะได้รับการคุ้มครองโดยระบบคุ้มครองผู้ซื้อ
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            แต่ละรายการจะระบุระดับความคืบหน้าของไอดี, ตัวละครหรือไอเทมที่มีและความหายาก, สกุลเงินในเกม, เซิร์ฟเวอร์หรือแพลตฟอร์ม, และวิธีการโอนย้ายข้อมูลล็อกอิน เพื่อให้คุณรู้แน่ชัดว่ากำลังซื้ออะไรอยู่ก่อนที่จะชำระเงิน เงินของคุณจะถูกเก็บไว้อย่างปลอดภัยจนกว่ากระบวนการส่งมอบจะเสร็จสมบูรณ์
          </p>
        </div>

        {/* ตรวจสอบก่อนซื้อ / วิธีการซื้อ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 bg-slate-950/30 p-5 rounded-2xl border border-slate-800">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-yellow-400">🔍</span> สิ่งที่ควรตรวจสอบก่อนซื้อ
            </h4>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1.5 text-slate-300">
              <li>ระดับเลเวลและความคืบหน้าโดยรวมของไอดี</li>
              <li>ตัวละครเฉพาะ ยูนิต หรือไอเทมที่คุณต้องการและความหายาก</li>
              <li>ยอดสกุลเงินในเกมและสถานะพรีเมียมที่รวมอยู่</li>
              <li>เซิร์ฟเวอร์ ภูมิภาค หรือแพลตฟอร์มตรงกับที่คุณใช้งานจริง</li>
              <li>สามารถเปลี่ยนอีเมลหรือข้อมูลล็อกอินเพื่อความปลอดภัยถาวรหรือไม่</li>
            </ul>
          </div>

          <div className="space-y-3 bg-slate-950/30 p-5 rounded-2xl border border-slate-800">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-yellow-400">🛒</span> วิธีการซื้อ
            </h4>
            <ol className="list-decimal list-inside text-xs sm:text-sm space-y-1.5 text-slate-300">
              <li>ค้นหาไอดี Brawl Stars และกรองตามสิ่งที่คุณสนใจ</li>
              <li>ตรวจสอบรายชื่อตัวละคร ภาพหน้าจอ และหมายเหตุจากผู้ขาย</li>
              <li>ชำระเงินผ่านระบบเช็คเอาต์ที่มีความปลอดภัย</li>
              <li>รับข้อมูลล็อกอิน เปลี่ยนแปลงข้อมูล และรักษาความปลอดภัยของไอดี</li>
            </ol>
          </div>
        </div>

        {/* สาระความรู้เชิงลึก */}
        <div className="space-y-6 pt-4 border-t border-slate-800">
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-2">ความสำคัญของพาวเวอร์เลเวล (Power Level)</h4>
            <p className="text-sm leading-relaxed">
              ข้อผิดพลาดที่พบบ่อยที่สุดในการซื้อไอดี Brawl Stars คือการนับจำนวนตัวละครทั้งหมดเป็นหัวใจสำคัญ นักสู้ที่พาวเวอร์เลเวล 1 แทบจะไม่สามารถสู้ในห้องที่ผู้เล่นอื่นอัปเลเวลเต็มได้เลย เพราะจะมีเลือดน้อย ดาเมจต่ำ และไม่มีทั้งสตาร์พาวเวอร์ (Star Power) หรือแก็ดเจ็ต (Gadget) นักสู้ตัวเดียวกันที่พาวเวอร์เลเวล 11 พร้อมสตาร์พาวเวอร์ แก็ดเจ็ต และเกียร์ที่ปลดล็อกครบ จะเป็นตัวละครคนละระดับกันเลย การอัปเกรดต้องใช้เหรียญ (Coins) และพาวเวอร์พอยต์ (Power Points) โดยเฉพาะเหรียญที่เป็นคอขวดสำคัญในระยะยาวของเกม
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-2">ไฮเปอร์ชาร์จและเกียร์ (Hypercharges and Gears)</h4>
            <p className="text-sm leading-relaxed">
              สองระบบท้ายสุดนี้คือตัวแยกแยะระหว่างไอดีที่แค่ "อัปเกรดแล้ว" กับไอดีที่ "สมบูรณ์แบบ" เกียร์จะถูกสร้างและติดตั้งแยกตามตัวละครแต่ละตัว ซึ่งให้โบนัสสถานการณ์ที่มีความสำคัญมากในการเล่นระดับถ้วยสูงๆ ส่วนไฮเปอร์ชาร์จคือการปลดล็อกระดับสูงสุดที่มีเฉพาะนักสู้บางตัว และมีราคาแพงมากจนไอดีส่วนใหญ่จะมีแค่ไม่กี่ตัวเท่านั้น ทั้งสองอย่างนี้ใช้เวลาสะสมนานและไม่สามารถมองเห็นได้จากภาพหน้าจอรายชื่อตัวละคร ดังนั้นควรสอบถามให้ชัดเจน
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-2">จำนวนถ้วยรางวัลเทียบกับผลงานในแรงค์</h4>
            <p className="text-sm leading-relaxed">
              ยอดถ้วยรางวัลสะสมสะท้อนถึงเวลาและความสม่ำเสมอ ซึ่งมันจะไม่รีเซ็ตแบบแรงค์แข่งขัน ทำให้มันเป็นตัววัดมูลค่าที่คงทนที่สุดบนไอดี Brawl Stars ในทางตรงกันข้าม อันดับแรงค์จะเป็นไปตามซีซั่น หากคุณต้องการไอดีที่ยังดูน่าประทับใจในอีกหกเดือนข้างหน้า ถ้วยรางวัลและนักสู้เลเวลตันคือสิ่งที่คุณควรจ่ายเงินซื้อ แต่ถ้าคุณต้องการเล่นในระดับแข่งขันทันทีในซีซั่นนี้ ประวัติแรงค์จะมีผลมากกว่า
            </p>
          </div>
        </div>

        {/* ข้อมูลทั่วไปของเกม / FAQ */}
        <div className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-4 text-xs sm:text-sm">
          <h4 className="text-base font-bold text-white mb-2">📌 ข้อมูลทั่วไปของเกมและคำถามที่พบบ่อย (FAQ)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
            <div>
              <p><strong className="text-white">ผู้พัฒนา / ผู้จัดจำหน่าย:</strong> Supercell</p>
              <p><strong className="text-white">แพลตฟอร์ม:</strong> Android, iOS</p>
              <p><strong className="text-white">วันที่วางจำหน่าย:</strong> 12 ธันวาคม 2018 (ทั่วโลก)</p>
            </div>
            <div>
              <p><strong className="text-white">การเปลี่ยนอีเมล:</strong> รองรับการเปลี่ยนอีเมลเพื่อความปลอดภัย</p>
              <p><strong className="text-white">การคุ้มครอง:</strong> ระบบโอนสินค้าให้ผู้ซื้อหลังตรวจสอบสำเร็จ</p>
              <p><strong className="text-white">เว็บไซต์ทางการ:</strong> <a href="https://supercell.com/en/games/brawlstars" target="_blank" rel="noreferrer" className="text-yellow-400 underline">supercell.com</a></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
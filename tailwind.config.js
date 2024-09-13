module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: { //color  text-hmPrimary
        hmPrimary: "#3490dc",
        hmSecondary: "#ffed4a",
        hmDanger: "#e3342f",
      },
      backgroundColor: { //color  bg-hmPrimary
        hmPrimary: "#3490dc",
        hmSecondary: "#ffed4a",
        hmDanger: "#e3342f",
      },
      fontFamily: { //font
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: { //boşluklar
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      borderRadius: { // Kenar yumuşatma
        none: "0",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
      boxShadow: {// Gölgelendirme
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
      },
      screens: { // responsive 
        xs: "480px",
        "3xl": "1920px",
      },
      transitionDuration: { //Geçiş süresi
        "0": "0ms",
        "2000": "2000ms",
        "3000": "3000ms",
      },
      zIndex: { // katman sırası
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      opacity: { // Saydamlık
        "10": "0.1",
        "20": "0.2",
        "95": "0.95",
      },
      maxWidth: { // maksimum genişlik
        "screen-2xl": "1536px",
        prose: "65ch",
      },
      minHeight: {  // minumum genişlik
        "0": "0",
        "full": "100%",
        "screen": "100vh",
      },
      inset: { // Yerleştirme
        "1/2": "50%",
        "full": "100%",
        "-1/2": "-50%",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};


/*
`plugins` bölümü, TailwindCSS'in temel özelliklerini genişletmek ve özelleştirmek için kullanılan eklentileri tanımlamak amacıyla kullanılır. 
TailwindCSS'in sunduğu bazı resmi ve topluluk tarafından geliştirilen eklentiler, projeye yeni yardımcı sınıflar veya işlevler ekleyebilir.

İşte `plugins` içerisine ekleyebileceğiniz bazı popüler eklentiler ve ne işe yaradıkları:

### 1. **`@tailwindcss/forms`**
   - **Açıklama:** Bu eklenti, form elemanlarının varsayılan tarayıcı stillerini sıfırlayarak, formların TailwindCSS ile daha tutarlı bir görünüme sahip olmasını sağlar.
   - **Kurulum:**
     ```bash
     npm install @tailwindcss/forms
     ```
   - **Kullanım:**
     ```js
     plugins: [
       require('@tailwindcss/forms'),
     ],
     ```

### 2. **`@tailwindcss/typography`**
   - **Açıklama:** Projeye zenginleştirilmiş metin içeriği (blog yazıları, makaleler vb.) için tipografi stilleri ekler. `prose` sınıfıyla zenginleştirilmiş metin düzeni sağlar.
   - **Kurulum:**
     ```bash
     npm install @tailwindcss/typography
     ```
   - **Kullanım:**
     ```js
     plugins: [
       require('@tailwindcss/typography'),
     ],
     ```

### 3. **`@tailwindcss/aspect-ratio`**
   - **Açıklama:** Elemanlar için sabit en-boy oranı (aspect ratio) sınıfları sağlar. Örneğin, videolar veya resimler için 16:9, 4:3 gibi oranlar ayarlamanıza olanak tanır.
   - **Kurulum:**
     ```bash
     npm install @tailwindcss/aspect-ratio
     ```
   - **Kullanım:**
     ```js
     plugins: [
       require('@tailwindcss/aspect-ratio'),
     ],
     ```

### 4. **`@tailwindcss/line-clamp`**
   - **Açıklama:** Bu eklenti, uzun metinleri belirli bir satır sayısına kısaltmanızı sağlar. Metni belirli satır sayısından sonra "..." ile keser.
   - **Kurulum:**
     ```bash
     npm install @tailwindcss/line-clamp
     ```
   - **Kullanım:**
     ```js
     plugins: [
       require('@tailwindcss/line-clamp'),
     ],
     ```

### 5. **`tailwindcss-children`**
   - **Açıklama:** Bu eklenti, CSS `:children` seçicisini kullanarak elemanların doğrudan çocukları üzerinde stil uygulamanıza olanak tanır.
   - **Kurulum:**
     ```bash
     npm install tailwindcss-children
     ```
   - **Kullanım:**
     ```js
     plugins: [
       require('tailwindcss-children'),
     ],
     ```

### 6. **`tailwindcss-gradients`**
   - **Açıklama:** Daha özelleştirilmiş degrade (gradient) arka planları oluşturmak için sınıflar ekler.
   - **Kurulum:**
     ```bash
     npm install tailwindcss-gradients
     ```
   - **Kullanım:**
     ```js
     plugins: [
       require('tailwindcss-gradients'),
     ],
     ```

### 7. **Özel Eklenti Tanımlamak**
   - **Açıklama:** TailwindCSS'e kendi özel sınıflarınızı veya işlevlerinizi ekleyebilirsiniz. Örneğin, özel `text-shadow` sınıfı eklemek için:
   - **Kullanım:**
     ```js
     plugins: [
       function({ addUtilities }) {
         const newUtilities = {
           '.text-shadow': {
             textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
           },
           '.text-shadow-md': {
             textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
           },
           '.text-shadow-lg': {
             textShadow: '6px 6px 8px rgba(0, 0, 0, 0.5)',
           },
         };
         addUtilities(newUtilities);
       },
     ],
     ```

### 8. **`tailwindcss-animate`**
   - **Açıklama:** TailwindCSS ile birlikte animasyon efektleri eklemek için kullanılır.
   - **Kurulum:**
     ```bash
     npm install tailwindcss-animate
     ```
   - **Kullanım:**
     ```js
     plugins: [
       require('tailwindcss-animate'),
     ],
     ```

Bu eklentiler, TailwindCSS'in özelliklerini genişletip özelleştirmenize olanak tanır. Projenizin gereksinimlerine göre bu eklentileri kullanabilirsiniz.

*/
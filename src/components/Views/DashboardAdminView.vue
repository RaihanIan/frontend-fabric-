<template>
  <div class="flex overflow-hidden flex-wrap gap-10 pr-20 text-black bg-white rounded-xl max-md:pr-5 relative">
    <!-- Sidebar -->
    <aside class="flex flex-col pt-2.5 pb-9 bg-zinc-300 w-1/5 max-md:w-full max-md:pb-5">
      <div class="flex self-start text-lg font-medium whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8f9aef494b3c81489f82c1633cf9db547c697d177769a786e3f43aa20cf9e5?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="FindingFabric logo" class="object-contain shrink-0 w-20 aspect-[1.11]" />
        <h1 class="self-start mt-7 basis-auto">FINDINGFABRIC</h1>
      </div>
      <nav class="flex flex-col items-start px-5 mt-16 w-full text-xl max-md:mt-10">
        <div class="flex gap-5 justify-between self-stretch w-full text-sm font-medium whitespace-nowrap">
          <div class="flex gap-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/131923fdbbcaec44e548935f8233d5cb07bc0bdf58fe35fa63daeda17e283aab?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Dashboard icon" class="object-contain shrink-0 w-11 aspect-square" />
            <span class="my-auto text-sm">Dashboard</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57ea6aa46cbf7d6448f1b1abd35c66d3e9ada887672847ce008e5d1170ca4928?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Expand icon" class="object-contain shrink-0 my-auto aspect-[1.8] w-[27px]" />
        </div>

        <div class="flex gap-3.5 mt-28 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1443b65ca1b6e16a26c353137d9157561a775234bcbb377889c8f01ce367d6ab?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Input Data Mitra icon" class="object-contain shrink-0 aspect-[0.94] w-[34px]" />
          <span class="basis-auto text-sm">Input Data Mitra</span>
        </div>

        <div class="flex gap-2.5 mt-16 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f806a09c7ef0674b434fa0a2c219b92087ecfd37a863f56719c8d2c332e994?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Management Supplier icon" class="object-contain shrink-0 aspect-[1.03] w-[39px]" />
          <span class="my-auto basis-auto text-sm">Management Supplier</span>
        </div>

        <div class="flex gap-2.5 mt-16 max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/749e16b3b87d37a6766ecd51c31b55a8f3d3cad94480385d923942c4096d8825?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Grade Supplier icon" class="object-contain shrink-0 aspect-[0.97] w-[39px]" />
          <span class="my-auto basis-auto text-sm">Grade Supplier</span>
        </div>

        <div class="flex gap-3 mt-60 whitespace-nowrap max-md:mt-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/06ae4eda351d43a8959c07bad6a0c2407bbc2646506b39ba258cba14ceffd3a1?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Setting icon" class="object-contain shrink-0 w-8 aspect-[1.03]" />
          <span class="text-sm">Setting</span>
        </div>
      </nav>
    </aside>

    <!-- Konten utama -->
    <div class="flex flex-col w-full relative">
      <!-- Bagian header untuk Admin dan Logout -->
      <div class="absolute top-0 right-0 flex justify-end items-center p-4 bg-white shadow-md w-full z-10">
        <button class="px-6 py-1 bg-orange-500 rounded-3xl text-sm text-white mr-4">
          Logout
        </button>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d328d574484d6b23ef5c80f7b171f721884aa0a1a2e33661c175e475416445c9?placeholderIfAbsent=true&apiKey=1ddfaeec17f94938b161e1f33a40ecbf" alt="Admin avatar" class="object-contain w-8 aspect-[0.95] mx-2" />
        <span class="text-sm">Admin</span>
      </div>

      <!-- Konten utama di bawah header -->
      <div class="flex-1 pt-16"> <!-- Tambahkan padding atas untuk menghindari header -->
        <!-- Konten lainnya di sini -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin'
}
</script>

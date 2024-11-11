<template>
  <header data-layername="navbar" class="flex flex-wrap gap-10 justify-between items-center py-2 pr-40 pl-24 text-lg font-medium text-black max-md:px-5">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d0caf8257f1bd016167359fbb73881341eb4d55bbf0891447743185fd73a47?placeholderIfAbsent=true&apiKey=b642bcfadf164c35aebff8fb97b04ffb" alt="Company logo" class="object-contain shrink-0 self-stretch my-auto w-20 aspect-[1.11]" />
    <nav data-layername="navItem" class="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[464px] max-md:max-w-full">
      <a href="/" data-layername="home" class="self-stretch my-auto">Home</a>
      <a href="/grade" data-layername="grade" class="self-stretch my-auto">Grade</a>
      <a href="/supplier" data-layername="supplier" class="self-stretch my-auto">Supplier</a>
      <a href="/about" data-layername="aboutUs" class="self-stretch my-auto">About Us</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<template>
  <div
    class="h-screen w-screen bg-green fixed top-0 l-0 z-10 flex justify-center items-center flex-col md:hidden"
  >
    <NLink to="/" class="mb-8" @click.native="$emit('close')">
      <svg
        width="29"
        height="48"
        viewBox="0 0 29 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.98947 40.1476C8.59326 40.2158 9.86842 40.2158 10.4728 40.2158C16.5827 40.2158 19.3364 37.5303 19.3364 33.2318C19.3364 29.6072 16.3806 26.9223 10.8771 26.9223C9.8021 26.9223 8.72779 26.9893 7.98947 27.1232V40.1476ZM7.98947 19.6705C8.86168 19.7387 10.0705 19.7387 10.8088 19.7387C15.912 19.7387 18.5299 17.2541 18.5299 13.5613C18.5299 10.2044 15.912 7.45137 10.5411 7.45137C9.73452 7.45137 8.72779 7.51832 7.98947 7.65347V19.6705ZM0 0.738315C3.4901 0.133894 6.57979 0 9.39979 0C20.8794 0 26.6533 5.50484 26.6533 13.3604C26.6533 17.4549 24.372 21.0139 21.1478 23.028C25.1766 24.9752 27.8621 29.1379 27.8621 33.5015C27.8621 41.6248 22.1545 47.6008 10.3389 47.6008C6.6461 47.6008 2.95389 47.3987 0 47.0646V0.738315Z"
          fill="white"
        />
      </svg>
    </NLink>
    <NLink
      to="/leistungen/"
      class="p-2 uppercase tracking-wide text-3xl text-white"
      @click.native="$emit('close')"
      >Leistungen</NLink
    >
    <NLink
      to="/projekte/"
      class="p-2 uppercase tracking-wide text-3xl text-white"
      @click.native="$emit('close')"
      >Projekte</NLink
    >
    <NLink
      to="/buero/"
      class="p-2 uppercase tracking-wide text-3xl text-white"
      @click.native="$emit('close')"
      >Büro</NLink
    >
    <NLink
      to="/kontakt/"
      class="p-2 uppercase tracking-wide text-3xl text-white"
      @click.native="$emit('close')"
      >Kontakt</NLink
    >
    <div class="mt-8 cursor-pointer" @click="$emit('close')">
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.8743 24.1181L1.56329 42.4291L5.80593 46.6718L24.117 28.3607L42.4284 46.6722L46.6711 42.4295L28.3596 24.1181L46.6711 5.80661L42.4284 1.56396L24.117 19.8754L5.80593 1.56438L1.56329 5.80702L19.8743 24.1181Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

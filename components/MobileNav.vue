<template>
  <div
    class="h-screen w-screen bg-green fixed top-0 l-0 z-10 flex justify-center items-center flex-col md:hidden"
  >
    <NLink to="/">
      <svg
        class="mb-16"
        width="45"
        height="76"
        viewBox="0 0 45 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click.native="$emit('close')"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.28 63.8121C14.236 63.9201 16.255 63.9201 17.212 63.9201C26.886 63.9201 31.246 59.6681 31.246 52.8621C31.246 47.1231 26.566 42.8721 17.852 42.8721C16.15 42.8721 14.449 42.9781 13.28 43.1901V63.8121ZM13.28 31.3901C14.661 31.4981 16.575 31.4981 17.744 31.4981C25.824 31.4981 29.969 27.5641 29.969 21.7171C29.969 16.4021 25.824 12.0431 17.32 12.0431C16.043 12.0431 14.449 12.1491 13.28 12.3631V31.3901ZM0.630005 1.41412C6.156 0.457116 11.048 0.245117 15.513 0.245117C33.689 0.245117 42.831 8.96111 42.831 21.3991C42.831 27.8821 39.219 33.5171 34.114 36.7061C40.493 39.7891 44.745 46.3801 44.745 53.2891C44.745 66.1511 35.708 75.6131 17 75.6131C11.153 75.6131 5.307 75.2931 0.630005 74.7641V1.41412Z"
          fill="#ffffff"
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

    <svg
      class="mt-16 cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click.native="$emit('close')"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.8743 24.1181L1.56329 42.4291L5.80593 46.6718L24.117 28.3607L42.4284 46.6722L46.6711 42.4295L28.3596 24.1181L46.6711 5.80661L42.4284 1.56396L24.117 19.8754L5.80593 1.56438L1.56329 5.80702L19.8743 24.1181Z"
        fill="white"
      />
    </svg>
  </div>
</template>

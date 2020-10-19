<template>
<div>
  <section class="hero is-primary is-medium empyr-hero">
<div class="hero-header navigation-header">
  <div class="container">
        <nav class="level">
          <div class="level-left">
              <div class="level-item">
                  <a href="#">
                    <img
                          src="../assets/img/empyrlogo.svg"
                          alt="Empyr"
                      >
                  </a>
                </div>
                <div class="level-item">
                <p class="logodesc">Shaping Academic and Employment Skills for Young Roma</p>
                </div>
                <div class="level-item">
          <b-dropdown class="language-selector" v-model="isPublic" aria-role="list">
              <button class="button is-primary" type="button" slot="trigger">
                  <template>
                      <b-icon icon="earth"></b-icon>
                      <span>EN</span>
                  </template>
                  <b-icon icon="menu-down"></b-icon>
              </button>

              <b-dropdown-item :value="true" aria-role="listitem">
                  <div class="media">
                      <div class="media-content">
                          <h3>RO - Román</h3>
                      </div>
                  </div>
              </b-dropdown-item>

              <b-dropdown-item :value="false" aria-role="listitem">
                  <div class="media">
                      <div class="media-content">
                          <h3>SK - Szlovák</h3>
                      </div>
                  </div>
              </b-dropdown-item>
          </b-dropdown>
          </div>
        </div>
      </nav>
    </div>
    </div>
  <div class="hero-body">
    <div class="container">
      
      <div class="levels columns is-vcentered">
        <div class="column is-one-third title">
            <h1 class="title is-size-2">
              <p>We aim to help you get the skills you need and find employment!</p>
            </h1>
              <b-button type="is-dark" size="is-medium" icon-left="arrow-down">Intrested</b-button>
        </div>
        <div class="column is-offset-1 is-hidden-mobile">
            <figure class="image header-image">
              <img src="../assets/img/headerimage.png">
            </figure>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="ko is-centered">
<div class="container">
  <div class="columns is-centered">
    <div class="column is-half">
        <h3 class="has-text-centered is-size-4">Please respond to these statements to help us find out whether we can support you
      </h3>
  </div>
</div>
<div class="columns is-centered">
<div class="ko-card column">
  <div class="ko-items">
    <div class="level koitem is-vcentered">
      <div class="lelvel-left">
        <p class="ko-text is-size-4">I declare myself Roma.</p>
      </div>
      <div class="level-right">
          <b-field>
              <b-radio-button v-model="radioRoma"
                  native-value="yes"
                  type="is-success"
                  size="is-large">
                  <span>Yes</span>
              </b-radio-button>
              <b-radio-button v-model="radioRoma"
                  native-value="no"
                  type="is-danger"
                  size="is-large">
                  <span>No</span>
              </b-radio-button>
          </b-field>
      </div>
    </div>
              <div class="error-message mb-4">
      <div><strong>Unfortunately, you don't meet the requirements.</strong></div>
      <div class="mt-2"><a href="#">Learn more about our work</a></div>
      </div>

        <div class="level koitem is-vcentered">
      <div class="lelvel-left">
        <p class="ko-text"><span class="is-size-4">I live in:</span>
                <ul class="is-size-5">
          <li>- Budapest</li>
          <li>- Pest county</li>
          <li>- Borsod-Abaúj-Zemplén county</li>
          <li>- Baranya county</li>
          <li>- Szabolcs-Szatmár-Bereg county</li>
                </ul></p>
      </div>
      <div class="level-right">
          <b-field>
              <b-radio-button v-model="radioLive"
                  native-value="yes"
                  type="is-success"
                  size="is-large">
                  <span>Yes</span>
              </b-radio-button>
              <b-radio-button v-model="radioLive"
                  native-value="no"
                  type="is-danger"
                  size="is-large"
                  >
                  <span>No</span>
              </b-radio-button>
          </b-field>
      </div>
    </div>
          <div class="error-message">
      <div><strong>Unfortunately, you don't meet the requirements.</strong></div>
      <div class="mt-1">In case you would like us to let you know when our program becomes available in your county, tell us your email address.</div>
      </div>
  </div>
    <hr>
    <div class="columns is-centered has-text-centered">
      <div class="column">
                    <b-button type="is-primary" size="is-large" class="red button-radius mt-10">Let’s get started</b-button>
              <p class="mt-3"><b-icon icon="clock-time-one-outline" size="is-small"></b-icon> It takes only <strong>5 minutes</strong></p>
              </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="whatis">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-two-fifths">
            <figure class="image contact-image mb-4">
              <img src="../assets/img/coordinator.png">
            </figure>
            <div class="contact">
              <div class="name">Melinda Vajda</div>
              <div class="title">Our employment coordinator in Hungary</div>
              <a href="" class="email">mvajda@romaeducationfund.org</a>
            </div>
      </div>
      <div class="column is-one-third">
            <h1 class="is-size-3 has-text-weight-bold">What is EMPYR?</h1>
            <div class="mt-3">EMPYR is part of Roma Education Fund’s SHAPYR program. Besides other activities we support young adults in their preparations for employment. The name itself is an acronym: EMP refers to employment while YR stands for young Roma. The project is supported by the Velux Foundations. Our services are completely free for you.</div>
            <div class="mt-5"><strong>If you are interested, <a href=""> register</a> and our colleague will reach out to you soon.</strong></div>
      </div>
    </div>
  </div>
</section>
<section class="services">
  <div class="container">
    <h1 class="is-size-3 has-text-weight-bold has-text-centered	mb-5">Services we provide</h1>
<div class="services-items">
  <h2 class="mb-5">For employment</h2>
<div class="service-item mb-6">
  <div class="service-name mb-2">
    <img class="" src="../assets/img/self-employment.svg" alt="Self employment">
<span class="" >Self-employment</span>
  </div>
  <div class="service-desc mt-4">
Having a great idea and an enterprenuerial mindset is a great combination to start your own business. There are state measures availble for start ups, in addition we can support you with trainings and couching.
  </div>
</div>
<div class="service-item mb-5">
  <div class="service-name mb-2">
    <img class="" src="../assets/img/contact-to-employers.svg" alt="Contact to employers">
<span class="" >Contact to employers</span>
  </div>
  <div class="service-desc mb-6">
It can happen that the demand and supply don’t meet. We can help you connect with the most important employers based on your quailification.
  </div>
</div>
<hr class="mt-5 mb-5">
  <h2 class="mb-5">To support studies and employment</h2>
<div class="service-item mb-6">
  <div class="service-name mb-2">
    <img class="" src="../assets/img/self-employment.svg" alt="Self employment">
<span class="" >Second-chance programs</span>
  </div>
  <div class="service-desc mt-4">
Having a great idea and an enterprenuerial mindset is a great combination to start your own business. There are state measures availble for start ups, in addition we can support you with trainings and couching.
  </div>
</div>
<div class="service-item mb-5">
  <div class="service-name mb-2">
    <img class="" src="../assets/img/contact-to-employers.svg" alt="Contact to employers">
<span class="" >Vocational training</span>
  </div>
  <div class="service-desc mb-6">
It can happen that the demand and supply don’t meet. We can help you connect with the most important employers based on your quailification.
  </div>
</div>
</div>
  </div>
</section>
<section class="testimonial">
  <div class="container">
      <h1 class="is-size-3 has-text-weight-bold has-text-centered	mb-5">Testimonials</h1>
      <div class="testimonial-items columns">


        <div class="testimonial-item column is-half">
          <div class="card">
              <div class="card-content">
                      <img
                          src="../assets/img/qu.svg"
                          alt="Testimonial icon"
                      >
                   <p class="title mt-5">
    SHAPYR provides regular trainings, which I think is very important.
    </p>
     <p class="subtitle">
      I will be 20 years old and I am currently a student of the Ganz Ábrahám Bilingual Secondary Vocational School.
    </p>
              <div class="media levels is-vcentered">
                <div class="level">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/img/test-image.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="name is-4">Oszkár Balogh</p>
                </div>
                </div>
    </div>
  </div>
</div>
        </div>

                <div class="testimonial-item column is-half">
          <div class="card">
              <div class="card-content">
                      <img
                          src="../assets/img/qu.svg"
                          alt="Testimonial icon"
                      >
                   <p class="title mt-5">
    SHAPYR provides regular trainings, which I think is very important.
    </p>
     <p class="subtitle">
      I will be 20 years old and I am currently a student of the Ganz Ábrahám Bilingual Secondary Vocational School.
    </p>
              <div class="media levels is-vcentered">
                <div class="level">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/img/test-image.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="name is-4">Oszkár Balogh</p>
                </div>
                </div>
    </div>
  </div>
</div>
        </div>
      </div>
  </div>
</section>
<section class="prefooter">
  <div class="container">
<div class="columns">
  <div class="column is-4">
    <h3 class="is-size-5 has-text-weight-bold">Visit us at</h3>
    <p>1139 Budapest, Váci út 99.</p>
    <a href="">
                          <img
                          src="../assets/img/navigation.svg"
                          alt="Direction"
                      >
                      <span>Directions</span>
      </a>
  </div>
    <div class="column is-4">
        <h3 class="is-size-5 has-text-weight-bold">Contact us</h3>
        <p>Should you have any questions, 
feel free to contact us</p>
    <a href="">
                          <img
                          src="../assets/img/messenger.svg"
                          alt="Send message"
                      >
                      <span>Send message</span>
      </a>
          <a href="">
                          <img
                          src="../assets/img/tel.svg"
                          alt="Telephone"
                      >
                      <span>06 30 792 64 70</span>
      </a>
                <a href="">
                          <img
                          src="../assets/img/email.svg"
                          alt="E-mail"
                      >
                      <span>info@ref.com</span>
      </a>
  </div>
    <div class="column is-4">
        <h3 class="is-size-5 has-text-weight-bold">We are made possible by</h3>
                        <a href="#" class="mr-5">
                    <img
                          src="../assets/img/romaeducationfund.png"
                          alt="Roma Education Fund"
                      >
        </a>
                <a href="#" class="mr-5">
                    <img
                          src="../assets/img/velux.png"
                          alt="Velux"
                      >
        </a>
  </div>
</div>
  </div>
</section>
<section class="footer has-text-centered">
  <div class="container">
    <h3 class="mb-5">Connect with us</h3>
    <div class="social">
        <a href="#" class="mr-5">
                    <img
                          src="../assets/img/fb.svg"
                          alt="Empyr"
                      >
        </a>
        <a href="#">
                    <img
                          src="../assets/img/twitter.svg"
                          alt="Empyr"
                      >
        </a>
        <a href="#" class="ml-5">
                    <img
                          src="../assets/img/instagram.svg"
                          alt="Empyr"
                      >
        </a>
    </div>
    <hr>
    <a href="">Privacy Policy</a>
  </div>
</section>
</div>
</template>



<script>
export default {
  data () {
    return {
      fields: {
        header_title: null,
        logo_desc: null,
        language_selector: null
      },
      radioRoma: '',
      radioLive: ''
    };
  },
  methods: {
    getContent () {
      this.$prismic.client.getSingle('landing_layout')
        .then((document) => {
          this.fields.header_title = document.data.header_title;
          this.fields.logo_desc = document.data.logo_desc;
          this.fields.language_selector = document.data.language_selector;
        })
    }
  },
  created () {
    this.getContent();
  }
};
</script>
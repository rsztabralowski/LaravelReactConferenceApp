@extends ('layouts.app')

@section('content')
                <div class="container">
                    <header>
                        <div id="welcome" class="m-b-md"></div>
                    </header>
                    @guest
                        <hr/>
                        <section>
                            <p>The official companion app for the 2019 Front.End developers conference in Edinburgh, Scotland!</p>
                            <p>Book your seat at one of our conference events, view keynote speakers, find travel information to and from the venue and discover the local amenities such as hotels and nearby restaurants.</p>
                            <div class ="text-center">
                                    <a class ="btn btn-primary" type="button"  href="{{ route('info') }}">CHECK HOW TO BOOK AND REGISTER</a>
                                </div>
                        </section>
                    @endguest
                    <hr/>
                    <h4>FEATURED EVENTS</h4>
                    <div id="events"></div>
                    <div id="sponsors"></div>
                </div>
                
@endsection   

    


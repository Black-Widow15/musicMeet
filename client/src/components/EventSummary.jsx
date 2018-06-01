// Properties needed:
// Data needed: name, date, time, imgUrl, location, description
// We will have to add functionality to link to the actual event page.
// We will probably dynamically generate the url based on the name or id.

let EventSummary = (props) => (
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={this.props.imgUrl} alt="Event Image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{this.props.name}</p>
        <p class="subtitle is-6">{this.props.location}</p>
      </div>
    </div>
    <div class="content">
      {this.props.description}
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <date>{this.props.date} </date>
      <time >{this.props.time}</time>
    </div>
  </div>
</div>

	)
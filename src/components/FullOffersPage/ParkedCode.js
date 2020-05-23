//--- Add this back in when the posted offers list grows too big ---
<div>
	<form>
		<input
			className="searchInput"
			type="text"
			name="searchterm"
			placeholder="Enter term or keyword here"
			onChange={this.handleSearchTerm("searchterm")}
		/>

		<button
			type="submit"
			className="searchTermBtn"
			onClick={() => {
				this.props.dispatch({
					type: "GET_OFFERS",
					payload: "searchterm",
				});
			}}>
			SEARCH
		</button>
	</form>
</div>;

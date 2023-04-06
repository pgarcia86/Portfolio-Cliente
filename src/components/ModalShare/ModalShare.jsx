export default function ModaleShare() {
	return (
		<div
			className="modal fade"
			id="shareModal"
			tabIndex="-1"
			aria-labelledby="shareModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="shareModalLabel">
							Share this project...
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<p>Copied to Clipboard</p>
					</div>
				</div>
			</div>
		</div>
	);
}

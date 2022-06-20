class Data {
	public readonly eventName: string = 'my-custom-event'
	private _event: Event
	private _workerId: number

	public start(): void {
		if (this._workerId) {
			window.clearInterval(this._workerId)
		}

		this._event = new CustomEvent(this.eventName, {
			bubbles: true,
			detail: { message: 'Hello world!' },
		})

		this._workerId = window.setInterval(() => {
			window.dispatchEvent(this._event)
		}, 5000)
	}

	public stop(): void {
		if (this._workerId) {
			window.clearInterval(this._workerId)
		}
	}
}

export default new Data()

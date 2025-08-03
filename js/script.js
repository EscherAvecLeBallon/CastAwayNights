
document.addEventListener("DOMContentLoaded", function() {
    const dataUrl = 'http://www.flippant.eu/Night/SluipRovers.html';  // Vervang dit door de juiste URL

    fetch(dataUrl)
        .then(response => {
            const reader = response.body.getReader();
            const contentLength = response.headers.get('content-length');
            let receivedLength = 0;
            let chunks = [];

            return new Response(new ReadableStream({
                start(controller) {
                    function push() {
                        reader.read().then(({ done, value }) => {
                            if (done) {
                                controller.close();
                                return;
                            }
                            receivedLength += value.length;
                            chunks.push(value);

                            // Update de laadbalk (zonder exacte percentage als geen content-length)
                            const percentage = contentLength ? (receivedLength / contentLength) * 100 : 0;
                            updateLoader(percentage);

                            controller.enqueue(value);
                            push();
                        }).catch(error => {
                            console.error('Fout bij het lezen van de stream:', error);
                        });
                    }
                    push();
                }
            })).text();
        })
        .then(html => {
            document.querySelector('.loader-container').style.display = 'none';
            window.location.href = 'http://www.flippant.eu/Night/SluipRovers.html';  // Vervang dit door de juiste URL
        })
        .catch(error => {
            console.error('Er is een fout opgetreden:', error);
        });

    function updateLoader(percentage) {
        document.querySelector('.loader-progress').style.width = `${percentage}%`;
        document.querySelector('.loading-text').textContent = `Laden... ${Math.floor(percentage)}%`;
    }
});

---
{
    "name": "EFI-NET Dataset",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Samsung DVS"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Video Interpolation"
    ],
    "description": "Video frame interpolation",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1UIGVBqNER_5KguYPAu5y7TVg-JlNhz3-/view?usp=sharing",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 1.02,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EFI-Net -  Video Frame Interpolation from Fusion of Events and Frames",
        "doi": "10.1109/CVPRW53098.2021.00142",
        "authors": [
            "Genady Paikin",
            "Yotam Ater",
            "Roy Shaul",
            "Evgeny Soloveichik"
        ],
        "abstract": "Event cameras are sensors with pixels that respond independently and asynchronously to changes in scene illumination. Event cameras have a number of advantages when compared to conventional cameras: low-latency, high temporal resolution, high dynamic range, low power and sparse data output. However, existing event cameras also suffer from comparatively low spatial resolution and are sensitive to noise. Recently, it has been shown that it is possible to reconstruct an intensity frame stream from an event stream. These reconstructions preserve the high temporal rate of the event stream, but tend to suffer from significant artifacts and low image quality due to the shortcomings of event cameras. In this work we demonstrate that it is possible to combine the best of both worlds, by fusing a color frame stream at low temporal resolution and high spatial resolution with an event stream at high temporal resolution and low spatial resolution to generate a video stream with both high temporal and spatial resolutions while preserving the original color information. We utilize a novel event frame interpolation network (EFI-Net), a multi-phase convolutional neural network which fuses the frame and event streams. EFI-Net is trained using only simulated data and generalizes exceptionally well to real-world experimental data. We show that our method is able to interpolate frames where traditional video interpolation approaches fail, while also outperforming event-only reconstructions. We further contribute a new dataset, containing event camera data synchronized with high speed video. This work opens the door to a new application for event cameras, enabling high fidelity fusion with frame based image streams for generation of high-quality high-speed video. The dataset is available at https://drive.google.com/file/d/1UIGVBqNER\\_5KguYPAu5y7TVg-JlNhz3-/view?usp=sharing",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 14,
            "updated": "2024-10-26 12:52:35.586991"
        },
        {
            "source": "scholar",
            "count": 37,
            "updated": "2025-06-21T13:08:33.258162"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://tub-rip.github.io/eventvision2021/papers/2021CVPRW_EFI-Net_Video_Frame_Interpolation_from_Fusion_of_Events_and_Frames.pdf"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9523155"
        },
        {
            "type": "project_page",
            "url": "https://drive.google.com/file/d/1UIGVBqNER_5KguYPAu5y7TVg-JlNhz3-/view"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "1291--1301",
        "year": 2021,
        "month": "jun",
        "author": "Paikin, Genady and Ater, Yotam and Shaul, Roy and Soloveichik, Evgeny",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} {Workshops} ({CVPRW})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/CVPRW53098.2021.00142",
        "url": "https://ieeexplore.ieee.org/document/9523155/",
        "shorttitle": "{EFI}-{Net}",
        "isbn": "978-1-66544-899-4",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{EFI}-{Net}: {Video} {Frame} {Interpolation} from {Fusion} of {Events} and {Frames}",
        "address": "Nashville, TN, USA",
        "type": "inproceedings",
        "key": "paikin_efi-net_2021"
    }
}
---

### Dataset Structure

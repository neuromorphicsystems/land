---
{
    "name": "EVDI",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "subcategory": [
        "De-blurring"
    ],
    "task": "Event-based Motion De-blurring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Only sample data is available on the Google Drive link",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1ihwE4KLwUMkc3Jwf6Gqq_XWRkzTpp811",
                "format": "Numpy",
                "available": false
            }
        ]
    },
    "paper": {
        "title": "Unifying Motion Deblurring and Frame Interpolation with Events",
        "doi": "10.1109/CVPR52688.2022.01724",
        "authors": [
            "Xiang Zhang",
            "Lei Yu"
        ],
        "abstract": "Slow shutter speed and long exposure time of framebased cameras often cause visual blur and loss of interframe information, degenerating the overall quality of captured videos. To this end, we present a unified framework of event-based motion deblurring and frame interpolation for blurry video enhancement, where the extremely low latency of events is leveraged to alleviate motion blur and facilitate intermediate frame prediction. Specifically, the mapping relation between blurry frames and sharp latent images is first predicted by a learnable double integral network, and a fusion network is then proposed to refine the coarse results via utilizing the information from consecutive blurry inputs and the concurrent events. By exploring the mutual constraints among blurry frames, latent images, and event streams, we further propose a self-supervised learning framework to enable network training with real-world blurry videos and events. Extensive experiments demonstrate that our method compares favorably against the state-of-the-art approaches and achieves remarkable performance on both synthetic and real-world datasets. Codes are available at https://github.com/XiangZ-0/EVDI.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 64,
            "updated": "2025-06-22T12:37:47.950956"
        },
        {
            "source": "scholar",
            "count": 104,
            "updated": "2025-06-22T12:37:47.119846"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2203.12178"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9880467"
        },
        {
            "type": "github_page",
            "url": "https://github.com/XiangZ-0/EVDI"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "17744--17753",
        "year": 2022,
        "month": "jun",
        "author": "Zhang, Xiang and Yu, Lei",
        "publisher": "IEEE",
        "booktitle": "2022 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-14",
        "language": "en",
        "doi": "10.1109/CVPR52688.2022.01724",
        "url": "https://ieeexplore.ieee.org/document/9880467/",
        "isbn": "978-1-66546-946-3",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Unifying {Motion} {Deblurring} and {Frame} {Interpolation} with {Events}",
        "address": "New Orleans, LA, USA",
        "type": "inproceedings",
        "key": "zhang_unifying_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ACSSC.2003.1292216",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-018-01144-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00830",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00663",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00251",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00829",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00548",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.01377",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00771",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCPHOT.2018.8368468",
            "source": "crossref"
        },
        {
            "doi": "10.1111/j.1467-8659.2007.01082.x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.179",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00938",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00382",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.37",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00516",
            "source": "crossref"
        },
        {
            "title": "Cbam: Convolutional block attention module",
            "source": "crossref"
        },
        {
            "title": "Event enhanced high-quality image recovery",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Learning event-driven video deblurring and interpolation",
            "source": "crossref"
        },
        {
            "title": "SGDR: Stochastic Gradient Descent with Warm Restarts",
            "source": "crossref"
        },
        {
            "title": "Video frame interpolation via adaptive convolution",
            "source": "crossref"
        },
        {
            "title": "Rife: Real-time intermediate flow estimation for video frame interpolation",
            "source": "crossref"
        },
        {
            "title": "Online video deblurring via dynamic temporal blending network",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Back to event basics: Self-supervised learning of image reconstruction for event cameras via photometric constancy",
            "source": "crossref"
        },
        {
            "title": "Reducing the sim-to-real gap for event cameras",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

---
{
    "name": "Blurry Event Dataset",
    "aliases": [],
    "year": 2020,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS240"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "De-blurring",
        "High-Speed Video Reconstruction"
    ],
    "task": "Image de-blurring",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Binary"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/file/d/1s-PR7GxpCAIB20hu7F3BlbXdUi4c9UAo/view",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 0.361,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Bringing a Blurry Frame Alive at High Frame-Rate With an Event Camera",
        "doi": "10.1109/CVPR.2019.00698",
        "authors": [
            "Liyuan Pan",
            "Cedric Scheerlinck",
            "Xin Yu",
            "Richard Hartley",
            "Miaomiao Liu",
            "Yuchao Dai"
        ],
        "abstract": "Event-based cameras can measure intensity changes (called \u2018events\u2019) with microsecond accuracy under high-speed motion and challenging lighting conditions. With the active pixel sensor (APS), the event camera allows simultaneous output of the intensity frames. However, the output images are captured at a relatively low frame-rate and often suffer from motion blur. A blurry image can be regarded as the integral of a sequence of latent images, while the events indicate the changes between the latent images. Therefore, we are able to model the blur-generation process by associating event data to a latent image. In this paper, we propose a simple and effective approach, the Event-based Double Integral (EDI) model, to reconstruct a high frame-rate, sharp video from a single blurry frame and its event data. The video generation is based on solving a simple non-convex optimization problem in a single scalar variable. Experimental results on both synthetic and real images demonstrate the superiority of our EDI model and optimization method in comparison to the state-of-the-art.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 200,
            "updated": "2025-07-14T07:34:34.761817"
        },
        {
            "source": "scholar",
            "count": 327,
            "updated": "2025-07-14T07:34:34.429473"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/1811.10180"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/8953329"
        },
        {
            "type": "github_page",
            "url": "https://github.com/panpanfei/Bringing-a-Blurry-Frame-Alive-at-High-Frame-Rate-with-an-Event-Camera"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "7",
        "stereo": false
    },
    "bibtex": {
        "pages": "6813--6822",
        "year": 2019,
        "month": "jun",
        "author": "Pan, Liyuan and Scheerlinck, Cedric and Yu, Xin and Hartley, Richard and Liu, Miaomiao and Dai, Yuchao",
        "publisher": "IEEE",
        "booktitle": "2019 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-12-19",
        "language": "en",
        "doi": "10.1109/CVPR.2019.00698",
        "url": "https://ieeexplore.ieee.org/document/8953329/",
        "isbn": "978-1-72813-293-8",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "Bringing a {Blurry} {Frame} {Alive} at {High} {Frame}-{Rate} {With} an {Event} {Camera}",
        "address": "Long Beach, CA, USA",
        "type": "inproceedings",
        "key": "pan_bringing_2019"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/TMM.2014.2321734",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298677",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46475-6_35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2019.2893427",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2013.147",
            "source": "crossref"
        },
        {
            "doi": "10.1287/ijoc.1060.0175",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00853",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7299181",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00267",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00371-017-1372-y",
            "source": "crossref"
        },
        {
            "doi": "10.1016/0167-2789(92)90242-F",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865228",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1142/3595",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2185520.2185560",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01258-8_46",
            "source": "crossref"
        },
        {
            "doi": "10.1145/1141911.1141956",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2016.7477561",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.405",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.102",
            "source": "crossref"
        },
        {
            "doi": "10.1177/0278364917691115",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2018.00155",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.739",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01246-5_15",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "title": "Photorealistic image reconstruction from hybrid intensity and event based sensor",
            "source": "crossref"
        },
        {
            "title": "Edge-based blur kernel estimation using patch priors",
            "source": "crossref"
        },
        {
            "title": "Learning to extract a video sequence from a single motion-blurred image",
            "source": "crossref"
        },
        {
            "title": "Simultaneous mosaicing and tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Real-time 3D reconstruction and 6-DoF tracking with an event camera",
            "source": "crossref"
        },
        {
            "title": "Blind deconvolution using a normalized sparsity measure",
            "source": "crossref"
        },
        {
            "title": "Blur kernel estimation using normalized color-line prior",
            "source": "crossref"
        },
        {
            "title": "High-speed video generation with an event camera",
            "source": "crossref"
        },
        {
            "title": "The levenberg-marquardt algorithm: implementation and theory",
            "source": "crossref"
        },
        {
            "title": "Continuous-time intensity estimation using event cameras",
            "source": "crossref"
        },
        {
            "title": "Deblurring images via dark channel prior",
            "source": "crossref"
        },
        {
            "title": "Deep multi-scale convolutional neural network for dynamic scene deblurring",
            "source": "crossref"
        },
        {
            "title": "Bringing alive blurred moments!",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure
- Contains 7 different files
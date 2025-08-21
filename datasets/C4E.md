---
{
    "name": "C4E",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring",
        "Colour Sensors"
    ],
    "description": "Colour de-blurring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Dataset link in Github not provided",
        "dataset_links": []
    },
    "paper": {
        "title": "Color4E: Event Demosaicing for Full-color Event Guided Image Deblurring",
        "doi": "10.1145/3664647.3681051",
        "authors": [
            "Yi Ma",
            "Peiqi Duan",
            "Yuchen Hong",
            "Chu Zhou",
            "Yu Zhang",
            "Jimmy Ren",
            "Boxin Shi"
        ],
        "abstract": "Neuromorphic event sensors are novel visual cameras that feature high-speed illumination-variation sensing and have found widespread application in guiding frame-based imaging enhancement. This paper focuses on color restoration in the event-guided image deblurring task, we fuse blurry images with mosaic color events instead of mono events to avoid artifacts such as color bleeding. The challenges associated with this approach include demosaicing color events for reconstructing full-resolution sampled signals and fusing bimodal signals to achieve image deblurring. To meet these challenges, we propose a novel network called Color4E to enhance the color restoration quality for the image deblurring task. Color4E leverages an event demosaicing module to upsample the spatial resolution of mosaic color events and a cross-encoding image deblurring module for fusing bimodal signals, a refinement module is designed to fuse full-color events and refine initial deblurred images. Furthermore, to avoid the real-simulated gap of events, we implement a display-filter-camera system that enables mosaic and full-color event data captured synchronously, to collect a real-captured dataset used for network training and validation. The results on the public dataset and our collected dataset show that Color4E enables high-quality event-based image deblurring compared to state-of-the-art methods.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-06-16T20:02:44.145997"
        },
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-06-16T20:02:43.890571"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://dl.acm.org/doi/10.1145/3664647.3681051"
        },
        {
            "type": "github_page",
            "url": "https://github.com/imgevt/Color4E"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "67",
        "stereo": false
    },
    "bibtex": {
        "pages": "661--670",
        "year": 2024,
        "month": "oct",
        "author": "Ma, Yi and Duan, Peiqi and Hong, Yuchen and Zhou, Chu and Zhang, Yu and Ren, Jimmy and Shi, Boxin",
        "publisher": "ACM",
        "booktitle": "Proceedings of the 32nd {ACM} {International} {Conference} on {Multimedia}",
        "urldate": "2024-12-21",
        "language": "en",
        "doi": "10.1145/3664647.3681051",
        "url": "https://dl.acm.org/doi/10.1145/3664647.3681051",
        "shorttitle": "{Color4E}",
        "isbn": "9798400706868",
        "title": "{Color4E}: {Event} {Demosaicing} for {Full}-color {Event} {Guided} {Image} {Deblurring}",
        "address": "Melbourne VIC Australia",
        "type": "inproceedings",
        "key": "ma_color4e_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2022.3199556",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3304486",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1145/2980179.2982399",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00484",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00745",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2016.00405",
            "source": "crossref"
        },
        {
            "doi": "10.1364/OE.437944",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19781-9_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00768",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46475-6_43",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2013.6738475",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2018.2865304",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20071-7_34",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.2975978",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2010.2085952",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58595-2_12",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-24574-4_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00215",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00032",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01730",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-20068-7_38",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2021.3069190",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2016.2574984",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00351",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2021.3129691",
            "source": "crossref"
        },
        {
            "doi": "10.1145/3581783.3612505",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2015.2482899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3240397",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01458",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i3.20242",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-67070-2_3",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01725",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 67 scenes, 8728 sets of blurred-sharp image pairs

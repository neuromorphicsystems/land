---
{
    "name": "NCER",
    "aliases": [
        "NCER-F",
        "NCER-E"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVXplorer"
    ],
    "other_sensors": [
        "FLIR BlackFly S RGB"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring"
    ],
    "description": "Event-based Motion De-blurring",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "Training and testing datasets provided as separate links",
        "dataset_links": [
            {
                "name": "Training Dataset",
                "url": "https://drive.google.com/file/d/16IdoPpBLjOmtDbrUigst5ee6wlOPnxkO",
                "format": "Numpy",
                "available": false
            },
            {
                "name": "Testing Dataset",
                "url": "https://drive.google.com/file/d/1PtkN5mk9DOGIap_K2Mt9OzUgQ7_M2YUq",
                "format": "Numpy",
                "available": false
            }
        ],
        "size_gb": 31.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Non-Coaxial Event-guided Motion Deblurring with Spatial Alignment",
        "doi": "10.1109/ICCV51070.2023.01148",
        "authors": [
            "Hoonhee Cho",
            "Yuhwan Jeong",
            "Taewoo Kim",
            "Kuk-Jin Yoon"
        ],
        "abstract": "Motion deblurring from a blurred image is a challenging computer vision problem because frame-based cameras lose information during the blurring process. Several attempts have compensated for the loss of motion information by using event cameras, which are bio-inspired sensors with a high temporal resolution. Even though most studies have assumed that image and event data are pixel-wise aligned, this is only possible with low-quality active-pixel sensor (APS) images and synthetic datasets. In real scenarios, obtaining per-pixel aligned event-RGB data is technically challenging since event and frame cameras have different optical axes. For the application of the event camera, we propose the first Non-coaxial Event-guided Image Deblurring (NEID) approach that utilizes the camera setup composed of a standard frame-based camera with a non-coaxial single event camera. To consider the per-pixel alignment between the image and event without additional devices, we propose the first NEID network that spatially aligns events to images while refining the image features from temporally dense event features. For training and evaluation of our network, we also present the first large-scale dataset, consisting of RGB frames with non-aligned events aimed at a breakthrough in motion deblurring with an event camera. Extensive experiments on various datasets demonstrate that the proposed method achieves significantly better results than the prior works in terms of performance and speed, and it can be applied for practical uses of event cameras.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 14,
            "updated": "2025-06-13T13:43:19.965219"
        },
        {
            "source": "scholar",
            "count": 23,
            "updated": "2025-06-13T13:43:19.808451"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/ICCV2023/papers/Cho_Non-Coaxial_Event-Guided_Motion_Deblurring_with_Spatial_Alignment_ICCV_2023_paper.pdf#page=5.42"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10377805"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/neid2023"
        }
    ],
    "full_name": "Non-Coaxial Events and RGB (NCER) dataset",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "12458\u201312469",
        "month": "oct",
        "year": 2023,
        "author": "Cho, Hoonhee and Jeong, Yuhwan and Kim, Taewoo and Yoon, Kuk-Jin",
        "publisher": "IEEE",
        "booktitle": "2023 IEEE/CVF International Conference on Computer Vision (ICCV)",
        "doi": "10.1109/iccv51070.2023.01148",
        "url": "http://dx.doi.org/10.1109/ICCV51070.2023.01148",
        "title": "Non-Coaxial Event-guided Motion Deblurring with Spatial Alignment",
        "type": "inproceedings",
        "key": "Cho_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ICCV.2017.356",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.mejo.2005.07.002",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00148",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46487-9_14",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00027",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3096161",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v36i1.19923",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19824-3_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00460",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.89",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.271",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00326",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v34i07.6712",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00314",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01334",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2011.6126276",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.435",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00830",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52729.2023.01729",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_30",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV56688.2023.00187",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.188",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00986",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.12276",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10578-9_51",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00155",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00829",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.509",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-66709-6_6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.180",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3093870",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.01155",
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
            "doi": "10.1109/ICCV48922.2021.00449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.207",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00366",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00931",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_24",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58536-5_24",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-25072-9_7",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00247",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.34",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.738",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00564",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01458",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00613",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-67832-6_29",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58539-6_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01125",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "title": "An image is worth 16x16 words: Transformers for image recognition at scale",
            "source": "crossref"
        },
        {
            "title": "Learning to deblur and generate high frame rate video with an event camera",
            "source": "crossref"
        },
        {
            "title": "Mobilenets: Efficient convolutional neural networks for mobile vision applications",
            "source": "crossref"
        },
        {
            "title": "On the variance of the adaptive learning rate and beyond",
            "source": "crossref"
        },
        {
            "title": "Esim: an open event camera simulator",
            "source": "crossref"
        },
        {
            "title": "Instance normalization: The missing ingredient for fast stylization",
            "source": "crossref"
        },
        {
            "title": "Attention is all you need",
            "source": "crossref"
        },
        {
            "title": "Non-uniform camera shake removal using a spatially-adaptive sparse penalty",
            "source": "crossref"
        },
        {
            "title": "Unsupervised event-based optical flow using motion compensation",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

NCER dataset includes:

- Blurry Images (png)
- Sharp (GT) Images (png)
- Corresponding Raw Events (npz)

The directory of dataset is as follows:

- Images:
  - {root}{mode}/{split}/{sequence}/{class}/{name}.png
- Events:
  - {root}{mode}/{split}/{sequence}/{class}/{name}.npz
  -

The meaning of the individual directory levels is:

- root : the root directory where the dataset is stored.
- split : train, test.
- sequence : the sequence name.
- class : blur image, gt image, events.
- name : index of the data.

The single event npz file contains the raw events (x,y,p,t) in the time range of the exposure time of the blurry image.

Training dataset:

- URL: https://drive.google.com/file/d/16IdoPpBLjOmtDbrUigst5ee6wlOPnxkO
- Size: 17 Gb
  Testing dataset:
- URL: https://drive.google.com/file/d/1PtkN5mk9DOGIap_K2Mt9OzUgQ7_M2YUq
- Size 14 Gb

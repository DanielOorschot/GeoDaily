
if __name__ == '__main__':
    from PIL import Image
    import glob, os

    #open all
    flag_info = {}
    for infile in glob.glob("*.png"):
        file, ext = os.path.splitext(infile)
        with Image.open(infile) as im:
            imrgb = im.convert('RGB')
            colour_list = imrgb.getcolors()
            num_pixels = imrgb.size[0] * imrgb.size[1]
            final_list = []
            for i in range(len(colour_list)):
                #threshold for colour inclusion needs adjusting
                if colour_list[i][0] > (num_pixels/20):
                    final_list.append(colour_list[i])
            flag_info[file] = final_list
    print(flag_info)


    
    
